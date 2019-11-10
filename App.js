import React from 'react';
import { Provider } from 'react-redux'
import Navigator from './src/Navigator'
import storeConfig from './src/store/storeConfig'
import FlashMessage from "react-native-flash-message"

const store = storeConfig()

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
      <FlashMessage position="top" animationDuration={450} />
    </Provider>
  );
}
