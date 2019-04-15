import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import Header from "./src/components/Header";
import LibraryLists from "./src/components/LibraryLists";

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header heading="This is my new app" />
          <LibraryLists />
        </View>
      </Provider>
    );
  }
}
