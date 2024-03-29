export interface AppState {
  isFirstOpen: boolean
};

const initialState: AppState = {
  isFirstOpen: true
};

export const SET_FIRST_OPEN = "AppState/SET_FIRST_OPEN";

export function setAppOpened() {
  return {
    type: SET_FIRST_OPEN
  };
}

export default function AppStateReducer(
  state = initialState,
  action
): AppState {
  switch (action.type) {
    case SET_FIRST_OPEN:
      return {
        ...state,
        isFirstOpen: false
      };
    default:
      return state;
  }
}
