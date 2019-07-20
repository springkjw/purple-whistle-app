import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

import AppView from "./src/modules/AppViewContainer";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppView />
      </PersistGate>
    </Provider>
  );
}
