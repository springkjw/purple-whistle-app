import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Text
} from "react-native";

const testImage = require("../assets/testImage1.png");
const placeLike = require("../assets/place-like.png");
const placeLikeActive = require("../assets/place-like-active.png");

export default function PlaceItem(props) {
  return (
    <TouchableOpacity
      style={styles.Container}
      onPress={() => props.clickItem()}
    >
      <ImageBackground style={styles.Image} source={testImage} />
      <View style={styles.Content}>
        <Image
          source={1 === 1 ? placeLikeActive : placeLike}
          style={styles.LikeImage}
        />
        <Text style={styles.Title}>{"분당고등학교"}</Text>
        <Text style={styles.Text}>{"성남시 분당구 수내동"}</Text>
        <Text style={styles.Text}>{"축구 ㅣ 농구"}</Text>
        <Text style={styles.Text}>{"주차가능"}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    shadowColor: "#f2f2f2",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: "row",
    overflow: "hidden"
  },
  Image: {
    height: "100%",
    flex: 55,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15
  },
  Content: {
    flex: 45,
    paddingVertical: 15,
    paddingLeft: 25,
    paddingRight: 15
  },
  Title: {
    fontSize: 13,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 5
  },
  Text: {
    color: "#666",
    fontSize: 12,
    marginTop: 4
  },
  LikeImage: {
    position: "absolute",
    top: 13,
    right: 15,
    width: 18,
    height: 18
  }
});
