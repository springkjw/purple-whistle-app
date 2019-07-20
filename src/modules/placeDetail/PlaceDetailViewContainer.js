import React, { useContext } from "react";
import { Text } from "react-native";
import { NavigationContext } from "@react-navigation/core";

import PlaceDetailView from "./PlaceDetailView";

const PlaceDetailContainer = () => {
  const navigation = useContext(NavigationContext);

  return (
    <PlaceDetailView 
      navigation={navigation}
    />
  );
};

PlaceDetailContainer.navigationOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: "#fff"
  },
  headerTitle: <Text>분당초등학교</Text>
});

export default PlaceDetailContainer;
