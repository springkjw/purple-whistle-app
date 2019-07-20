import DaumMap from "react-native-daummap";

const POSITION_SET = "PlaceState/POSITION_SET";
const FILTER_CHANGE = "PlaceState/FILTER_CHANGE";
const FILTER_RESET = "PlaceState/FILTER_RESET";
const MAP_LOADED = "PlaceState/MAP_LOADED";

function position(region, lastLat, lastLong) {
  return {
    type: POSITION_SET,
    region,
    lastLat,
    lastLong
  };
}

function changeFilter(label, value) {
  return {
    type: FILTER_CHANGE,
    label,
    value
  };
}

function resetFilterOption() {
  return {
    type: FILTER_RESET
  };
}

function mapLoaded(lastLat, lastLong, region) {
  return {
    type: MAP_LOADED,
    lastLat,
    lastLong,
    region
  };
}

export function setPosition(region, lat, long) {
  return dispatch => dispatch(position(region, lat, long));
}

export function toggleFilter(label, value) {
  return dispatch => dispatch(changeFilter(label, value));
}

export function resetFilter() {
  return dispatch => dispatch(resetFilterOption());
}

export function loadMap(day) {}

const initialState = {
  lastLat: 37.40269721785548,
  lastLong: 127.10459896729914,
  region: null,
  filter: {
    type: [0],
    price: [2],
    outdoor: [2],
    parking: [1]
  }
};

export default function PlaceStateReducer(state = initialState, action) {
  switch (action.type) {
    case POSITION_SET:
      return Object.assign({}, state, {
        region: action.region,
        lastLat: action.lastLat,
        lastLong: action.lastLong
      });
    case FILTER_CHANGE:
      const new_filter = Object.assign({}, state.filter, {
        [action.label]: action.value
      });

      return Object.assign({}, state, {
        filter: new_filter
      });
    case FILTER_RESET:
      return Object.assign({}, state, {
        filter: initialState.filter
      });
    default:
      return state;
  }
}
