import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, FlatList } from "react-native";
import ListItem from "./ListItem";

class LibraryLists extends Component {
  renderItem = library => {
    return <ListItem library={library} />;
  };
  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id}
      />
    );
  }
}
const mapStateToProps = state => {
  return { libraries: state.libraries };
};
export default connect(mapStateToProps)(LibraryLists);
