import { compose, lifecycle } from "recompose";
import { Platform } from "react-native";

import AppView from "./AppView";

export default compose(
  lifecycle({
    componentDidMount() {
      if (Platform.OS === "android") {
      }
    }
  })
)(AppView);
