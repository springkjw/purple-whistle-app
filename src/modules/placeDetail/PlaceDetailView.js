import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  Clipboard,
  Alert,
  Linking
} from "react-native";
import Carousel from "react-native-snap-carousel";

const share = require("../../assets/share.png");
const arrowLeft = require("../../assets/arrow-left.png");
const placeIcon1 = require("../../assets/place-icon-1.png");
const placeIcon2 = require("../../assets/place-icon-2.png");
const placeIcon3 = require("../../assets/place-icon-3.png");
const placeIcon4 = require("../../assets/place-icon-4.png");
const test = require("../../assets/testImage2.png");
const pageWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  HeaderBack: {
    padding: 5,
    marginLeft: 20
  },
  HeaderBackImage: {
    width: 20,
    height: 20
  },
  HeaderShare: {
    padding: 5,
    marginRight: 20
  },
  HeaderShareImage: {
    width: 20,
    height: 20
  },
  Title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333"
  },
  CarouselImage: {
    width: "100%",
    height: 210
  },
  ContentContainer: {
    paddingTop: 30,
    paddingHorizontal: 20
  },
  Content: {
    flexDirection: "row",
    marginBottom: 8
  },
  ContentIcon: {
    width: 24,
    height: 24,
    marginRight: 15
  },
  ContentText: {
    color: "#666",
    fontSize: 13
  },
  ContentColumn: {
    alignItems: "center",
    paddingVertical: 5
  },
  ContentRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  Address1: {
    width: 36,
    paddingVertical: 4,
    paddingHorizontal: 0.6,
    borderColor: "#946dff",
    borderRadius: 7.5,
    borderWidth: 0.6,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8
  },
  Address1Text: {
    color: "#946dff",
    fontWeight: "bold",
    fontSize: 11
  },
  Address2: {
    width: 36,
    paddingVertical: 4,
    paddingHorizontal: 0.6,
    backgroundColor: "#666",
    borderRadius: 7.5,
    textAlign: "center",
    marginRight: 8,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 11
  }
});

export default class PlaceDetailScreen extends React.Component {
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     headerStyle: {
  //       backgroundColor: "#fff"
  //     },
  //     headerTitle: <Text style={styles.Title}>분당초등학교</Text>,
  //     headerLeft: (
  //       <TouchableOpacity
  //         onPress={() => navigation.pop()}
  //         style={styles.HeaderBack}
  //       >
  //         <Image source={arrowLeft} style={styles.HeaderBackImage} />
  //       </TouchableOpacity>
  //     ),
  //     headerRight: (
  //       <TouchableOpacity
  //         onPress={() => alert("This is a button!")}
  //         style={styles.HeaderShare}
  //       >
  //         <Image source={share} style={styles.HeaderShareImage} />
  //       </TouchableOpacity>
  //     )
  //   };
  // };

  renderItem({ item, index }) {
    return (
      <View>
        <ImageBackground source={test} style={styles.CarouselImage} />
      </View>
    );
  }

  copyAddress(adress) {
    Clipboard.setString(adress);
    Alert.alert("주소가 복사되었습니다.");
  }

  callPhone(phoneNumber) {
    Linking.openURL(`tel:${phoneNumber}`);
  }

  openHomepage(url) {
    Linking.openURL(url);
  }

  render() {
    return (
      <View>
        <Carousel
          data={[1, 2, 3]}
          renderItem={this.renderItem}
          sliderWidth={pageWidth}
          itemWidth={pageWidth}
          itemHeight={210}
        />

        <View style={styles.ContentContainer}>
          <View style={styles.Content}>
            <Image source={placeIcon1} style={styles.ContentIcon} />
            <View style={styles.ContentColumn}>
              <View style={styles.ContentRow}>
                <Text style={styles.ContentText}>{"경기도 성남시 분당구 내정로 165번길 31"}</Text>
                <TouchableOpacity
                  style={styles.Address1}
                  onPress={() => this.copyAddress("경기도 성남시 분당구 내정로 165번길 31")}
                >
                  <Text style={styles.Address1Text}>복사</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ContentRow}>
                <Text style={styles.Address2}>지번</Text>
                <Text style={styles.ContentText}>{"경기도 성남시 분당구 내정로 165번길 31"}</Text>
              </View>
            </View>
          </View>
          <View style={styles.Content}>
            <Image source={placeIcon2} style={styles.ContentIcon} />
            <View style={styles.ContentColumn}>
              <View style={styles.ContentRow}>
                <TouchableOpacity onPress={() => this.callPhone("031-710-7806")}>
                  <Text style={styles.ContentText}>{"031-710-7806"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.Content}>
            <Image source={placeIcon3} style={styles.ContentIcon} />
            <View style={styles.ContentColumn}>
              <View style={styles.ContentRow}>
                <TouchableOpacity onPress={() => this.openHomepage("https://naver.com")}>
                  <Text style={styles.ContentText}>{"https://naver.com"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.Content}>
            <Image source={placeIcon4} style={styles.ContentIcon} />
            <View style={styles.ContentColumn}>
              <View style={styles.ContentRow}>
                <Text style={styles.ContentText}>{"주차가능"}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}