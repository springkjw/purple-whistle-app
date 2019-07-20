import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function PlaceFilterItem(props) {
  const clickOption = value => {
    let filterd = [];

    if (props.label === "type") {
      filterd = props.filterItems.includes(value)
        ? props.filterItems.filter(i => i !== value)
        : [...props.filterItems, value];
    } else {
      filterd = filterd.includes(value)
        ? filterd.filter(i => i !== value)
        : [...filterd, value];
    }

    props.onClickItem(props.label, filterd);
  };

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{props.title}</Text>
      <View style={styles.itemContent}>
        {props.items.map((item, idx) => {
          return (
            <TouchableOpacity
              onPress={() => clickOption(item.value)}
              style={
                idx === 0 && item.active
                  ? styles.itemButtonFirstActive
                  : idx === 0
                  ? styles.itemButtonFirst
                  : idx !== 0 && item.active
                  ? styles.itemButtonActive
                  : styles.itemButton
              }
              key={idx}
            >
              <Text style={styles.itemLabel}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20
  },
  itemContent: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  itemTitle: {
    fontSize: 11,
    color: "#333333",
    marginBottom: 12,
    fontWeight: "bold"
  },
  itemLabel: {
    fontSize: 12
  },
  itemButtonFirstActive: {
    height: 30,
    backgroundColor: "#f7f5ff",
    borderColor: "#9a75ff",
    borderWidth: 0.9,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    color: "#666666"
  },
  itemButtonFirst: {
    height: 30,
    backgroundColor: "#fff",
    borderColor: "#f2f2f2",
    borderWidth: 0.9,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    color: "#666666"
  },
  itemButtonActive: {
    height: 30,
    backgroundColor: "#f7f5ff",
    borderColor: "#9a75ff",
    borderWidth: 0.9,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    color: "#666666",
    marginLeft: 10
  },
  itemButton: {
    height: 30,
    backgroundColor: "#fff",
    borderColor: "#f2f2f2",
    borderWidth: 0.9,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    color: "#666666",
    marginLeft: 10
  }
});
