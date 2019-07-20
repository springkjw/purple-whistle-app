import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import HomeScreen from "../home/HomeViewContainer";
import Place from "../place/PlaceViewContainer";
import PlaceDetail from "../placeDetail/PlaceDetailViewContainer";

const iconHome = require("../../assets/home.png");
const iconHomeActive = require("../../assets/home-active.png");
const iconContent = require("../../assets/content.png");
const iconContentActive = require("../../assets/content-active.png");
const iconPlace = require("../../assets/place.png");
const iconPlaceActive = require("../../assets/place-active.png");
const iconTeam = require("../../assets/team.png");
const iconTeamActive = require("../../assets/team-active.png");
const iconSetting = require("../../assets/setting.png");
const iconSettingActive = require("../../assets/setting-active.png");

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10
  },
  tabBarIcon: {
    width: 23,
    height: 23
  },
  tabBarIconFocused: {},
  headerContainer: {
    backgroundColor: "#9a75ff"
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  }
});

const PlaceStack = createStackNavigator({
  PlaceHome: {
    screen: Place
  },
  PlaceDetail: {
    screen: PlaceDetail
  }
});

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Content: {
      screen: HomeScreen
    },
    Place: {
      screen: PlaceStack
    },
    Team: {
      screen: HomeScreen
    },
    Setting: {
      screen: HomeScreen
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;

        let iconSource;
        switch (routeName) {
          case "Home":
            if (focused) {
              iconSource = iconHomeActive;
            } else {
              iconSource = iconHome;
            }
            break;
          case "Content":
            if (focused) {
              iconSource = iconContentActive;
            } else {
              iconSource = iconContent;
            }
            break;
          case "Place":
            if (focused) {
              iconSource = iconPlaceActive;
            } else {
              iconSource = iconPlace;
            }
            break;
          case "Team":
            if (focused) {
              iconSource = iconTeamActive;
            } else {
              iconSource = iconTeam;
            }
            break;
          case "Setting":
            if (focused) {
              iconSource = iconSettingActive;
            } else {
              iconSource = iconSetting;
            }
            break;
        }
        return (
          <View style={styles.tabBarItemContainer}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      }
    }),
    tabBarPosition: "bottom",
    animationEnabled: true,
    tabBarOptions: {
      showLabel: false
    }
  }
);
