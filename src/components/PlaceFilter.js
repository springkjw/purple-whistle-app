import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  ScrollView
} from "react-native";

import PlaceFilterItem from "./PlaceFilterItem";

const iconFilter = require("../assets/filter.png");
const iconFilterActive = require("../assets/filter-active.png");
const iconFilterClose = require("../assets/filter-close.png");

export default function PlaceFilter(props) {
  const icon = iconFilter;
  const iconClose = iconFilterClose;

  const label = () => {
    let labelItems = [];

    if (props.filterItems.type.includes(0)) {
      labelItems.push("농구");
    }
    if (props.filterItems.type.includes(1)) {
      labelItems.push("축구");
    }
    if (props.filterItems.type.includes(2)) {
      labelItems.push("풋살");
    }

    if (props.filterItems.price.includes(0)) {
      labelItems.push("유료대관");
    } else if (props.filterItems.price.includes(1)) {
      labelItems.push("무료대관");
    } else {
      labelItems.push("대관료무관");
    }

    if (props.filterItems.outdoor.includes(0)) {
      labelItems.push("실내");
    } else if (props.filterItems.outdoor.includes(1)) {
      labelItems.push("실외");
    } else {
      labelItems.push("실내외무관");
    }

    if (props.filterItems.parking.includes(0)) {
      labelItems.push("주차가능");
    } else {
      labelItems.push("주차무관");
    }

    return labelItems;
  };

  return (
    <View style={styles.filterContainer}>
      <View style={styles.filterContentContainer}>
        <ScrollView
          style={styles.filterLabelContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {label().map((item, index) => {
            return (
              <Text key={index} style={styles.filterLabel}>
                {item}
              </Text>
            );
          })}
        </ScrollView>
        <TouchableOpacity
          onPress={() => props.toggleFilter()}
          style={styles.filterIconContainer}
        >
          <Image
            source={props.isOpen ? iconClose : icon}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>

      {props.isOpen ? (
        <View style={styles.filterAreaContainer}>
          <View style={styles.filterAreaContentContainer}>
            <PlaceFilterItem
              onClickItem={props.onClickFilter}
              title="종목"
              label="type"
              filterItems={props.filterItems.type}
              items={[
                {
                  label: "농구",
                  active: props.filterItems.type.includes(0),
                  value: 0
                },
                {
                  label: "축구",
                  active: props.filterItems.type.includes(1),
                  value: 1
                },
                {
                  label: "풋살",
                  active: props.filterItems.type.includes(2),
                  value: 2
                }
              ]}
            />
            <PlaceFilterItem
              onClickItem={props.onClickFilter}
              title="대관료"
              label="price"
              items={[
                {
                  label: "유료",
                  active: props.filterItems.price.includes(0),
                  value: 0
                },
                {
                  label: "무료",
                  active: props.filterItems.price.includes(1),
                  value: 1
                },
                {
                  label: "무관",
                  active: props.filterItems.price.includes(2),
                  value: 2
                }
              ]}
            />
            <PlaceFilterItem
              onClickItem={props.onClickFilter}
              title="실내외"
              label="outdoor"
              items={[
                {
                  label: "실내",
                  active: props.filterItems.outdoor.includes(0),
                  value: 0
                },
                {
                  label: "실외",
                  active: props.filterItems.outdoor.includes(1),
                  value: 1
                },
                {
                  label: "무관",
                  active: props.filterItems.outdoor.includes(2),
                  value: 2
                }
              ]}
            />
            <PlaceFilterItem
              onClickItem={props.onClickFilter}
              title="주차"
              label="parking"
              items={[
                {
                  label: "주차가능",
                  active: props.filterItems.parking.includes(0),
                  value: 0
                },
                {
                  label: "무관",
                  active: props.filterItems.parking.includes(1),
                  value: 1
                }
              ]}
            />
          </View>
          <View style={styles.filterButtonContainer}>
            <TouchableHighlight
              onPress={() => props.onResetFilter()}
              style={styles.filterButtonReset}
            >
              <Text style={styles.filterButtonResetText}>초기화</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.filterButtonApply}>
              <Text style={styles.filterButtonApplyText}>적용하기</Text>
            </TouchableHighlight>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    position: "absolute",
    top: 0,
    minHeight: 45,
    width: "100%"
  },
  filterContentContainer: {
    height: 45,
    backgroundColor: "#FCFCFC",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 0
  },
  filterLabelContainer: {
    flexDirection: "row",
    // alignItems: "center"
  },
  filterLabel: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 7,
    paddingBottom: 7,
    borderColor: "#F2F2F2",
    borderWidth: 1,
    borderRadius: 14,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
    color: "#666666",
    lineHeight: 0,
    marginLeft: 8
  },
  filterIconContainer: {
    backgroundColor: "#f2f2f2",
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  filterIcon: {
    width: 25,
    height: 25
  },
  filterAreaContainer: {
    height: 300
  },
  filterAreaContentContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10
  },
  filterButtonContainer: {
    flexDirection: "row",
    height: 45
  },
  filterButtonReset: {
    backgroundColor: "#fbfbfb",
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  filterButtonApply: {
    backgroundColor: "#9a75ff",
    flex: 7,
    justifyContent: "center",
    alignItems: "center"
  },
  filterButtonResetText: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "bold"
  },
  filterButtonApplyText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold"
  }
});
