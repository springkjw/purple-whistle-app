import React from "react";
import MapView from "react-native-daummap";

export default function PlaceMap(props) {
  return (
    <MapView
      initialRegion={{
        zoomLevel: 2
      }}
      isTracking={props.isTracking}
      mapType={"Standard"}
      onRegionChange={position => {
        return props.regionChange(position);
      }}
      onUpdateCurrentLocation={position => {
        return props.updateCurrentLocation(position);
      }}
      style={{
        width: "100%",
        height: props.height ? props.height : "100%"
      }}
    />
  );
}
