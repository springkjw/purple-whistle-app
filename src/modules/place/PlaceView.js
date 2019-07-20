import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import KakaoMap from "react-native-daummap";
import { KAKAO_REST_API_KEY } from "react-native-dotenv";

import { PlaceFilter, PlaceMap, PlaceContent } from "../../components";

export default class PlaceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOpen: false,
      contentOpen: false,
      isTracking: true,
      region: props.region
    };
    this.kakaoMap = KakaoMap;
  }

  componentDidMount() {
    this.kakaoMap.setRestApiKey(KAKAO_REST_API_KEY);
  }

  toggleFilter() {
    this.setState({
      filterOpen: !this.state.filterOpen,
      contentOpen: false
    });
  }

  toggleContent() {
    this.setState({
      filterOpen: false,
      contentOpen: !this.state.contentOpen
    });
  }

  goToPlaceDetail() {
    this.props.navigation.navigate("PlaceDetail");
  }

  _getRegionArea(long, lat) {
    this.kakaoMap
      .getCoordToRegionArea(lat, long)
      .then(res => {
        const documents = res.documents;
        let addressName = null;

        if (documents.length > 0) {
          addressName = documents[0].address_name;
        }

        this.props.setPosition(addressName, long, lat);
      })
      .catch(err => {
        console.warn(err.message, err.status);
      });
  }

  regionChange(position) {
    const long = position.coordinate.longitude;
    const lat = position.coordinate.latitude;

    this._getRegionArea(long, lat);
  }

  updateCurrentLocation(position) {
    const long = position.coordinate.longitude;
    const lat = position.coordinate.latitude;

    this.setState({
      isTracking: false
    });

    this._getRegionArea(long, lat);
  }

  render() {
    return (
      <View style={styles.PlaceContainer}>
        <PlaceMap
          latitude={this.props.lastLat}
          longitude={this.props.lastLong}
          isTracking={this.state.isTracking}
          regionChange={this.regionChange.bind(this)}
          updateCurrentLocation={this.updateCurrentLocation.bind(this)}
          style={styles.PlaceMapContainer}
        />

        <PlaceFilter
          style={styles.PalceFilter}
          filterItems={this.props.filter}
          isOpen={this.state.filterOpen}
          toggleFilter={this.toggleFilter.bind(this)}
          onClickFilter={this.props.toggleFilter}
          onResetFilter={this.props.resetFilter}
        />

        <PlaceContent
          isOpen={this.state.contentOpen}
          toggle={this.toggleContent.bind(this)}
          clickItem={this.goToPlaceDetail.bind(this)}
          style={styles.PlaceContentContainer}
        />

        <TouchableOpacity style={styles.PlaceReset} />
        <TouchableOpacity style={styles.PlaceCurrent} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  PlaceContainer: {
    flexDirection: "column",
    height: "100%",
    flex: 1
  },
  PlaceMapContainer: {
    width: "100%",
    height: "100%",
    flex: 1
  },
  PlaceReset: {
    position: "absolute",
    bottom: 140,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff"
  },
  PlaceCurrent: {
    position: "absolute",
    bottom: 80,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff"
  }
});
