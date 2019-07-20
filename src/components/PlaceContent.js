import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

import PlaceItem from "./PlaceItem";

const arrow = require("../assets/arrow-small.png");

export default function PlaceContent(props) {
  return (
    <View style={props.isOpen ? styles.ContainerOpen : styles.Container}>
      <TouchableOpacity
        style={styles.Header}
        onPress={() => props.toggle()}
        activeOpacity={1}
      >
        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderText}>이 지역 모든 시설 보기</Text>
          <Image style={styles.HeaderImage} source={arrow} />
        </View>
      </TouchableOpacity>

      {props.isOpen ? (
        <ScrollView style={styles.Content}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => {
            return <PlaceItem clickItem={props.clickItem} key={idx} />;
          })}
        </ScrollView>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: "column",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff"
  },
  ContainerOpen: {
    flexDirection: "column",
    position: "absolute",
    top: 45,
    bottom: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "#fff"
  },
  Header: {
    justifyContent: "center",
    paddingHorizontal: 20,
    height: 45
  },
  HeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  HeaderText: {
    color: "#666",
    fontSize: 12
  },
  HeaderImage: {
    width: 25,
    height: 25
  },
  Content: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 20
  }
});
