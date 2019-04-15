import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  StyleSheet,
  ScrollView
} from "react-native";
import CardSection from "./CardSection";
import * as action from "../action";
import { connect } from "react-redux";

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderData = () => {
    if (this.props.library.item.id === this.props.selectedLibraryId) {
      return (
        <CardSection>
          <Text>{this.props.library.item.description}</Text>
        </CardSection>
      );
    }
  };
  render() {
    const { id, title } = this.props.library.item;
    return (
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
          <View>
            <CardSection>
              <Text style={styles.txtColor}>{title}</Text>
            </CardSection>
            {this.renderData()}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "this is the");
  return { selectedLibraryId: state.selectedLibraryId };
};

const styles = StyleSheet.create({
  txtColor: {
    borderBottomWidth: 1,
    padding: 5,
    color: "#FF00FF",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: 20
  }
});

export default connect(
  mapStateToProps,
  action
)(ListItem);
