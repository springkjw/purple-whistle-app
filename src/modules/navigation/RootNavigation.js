import { createAppContainer, createStackNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import LoginScreen from "../login/LoginViewContainer";

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    defaultNavigationOptions: () => ({
      header: null
    })
  }
);

export default createAppContainer(stackNavigator);
