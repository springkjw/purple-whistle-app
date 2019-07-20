import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContext } from "@react-navigation/core";
import { useSelector, useDispatch } from "react-redux";

import PlaceView from "./PlaceView";
import { setPosition, toggleFilter, resetFilter } from "./PlaceState";

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row"
  },
  Title: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  },
});

const PlaceTitle = () => {
  const region = useSelector(state => state.place.region);

  return (
    <View>
      <Text style={styles.Title}>{region}</Text>
    </View>
  );
};

const PlaceContainer = () => {
  const navigation = useContext(NavigationContext);
  const lastLat = useSelector(state => state.place.lastLat);
  const lastLong = useSelector(state => state.place.lastLong);
  const filter = useSelector(state => state.place.filter);

  const dispatch = useDispatch();

  return (
    <PlaceView
      navigation={navigation}
      lastLat={lastLat}
      lastLong={lastLong}
      filter={filter}
      setPosition={(rg, lat, long) => {
        return dispatch(setPosition(rg, lat, long));
      }}
      toggleFilter={(label, value) => dispatch(toggleFilter(label, value))}
      resetFilter={() => dispatch(resetFilter())}
    />
  );
};

PlaceContainer.navigationOptions = props => ({
  headerStyle: {
    backgroundColor: "#9a75ff"
  },
  headerTitle: <PlaceTitle />
});

export default PlaceContainer;
