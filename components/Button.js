import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default class Button extends React.Component {
  styles = StyleSheet.create({
    container: {
      flex: this.props.size ? this.props.size : 1,
      justifyContent: "center",
      alignItems: "center",
      borderColor: 'black',
      borderWidth: 0.5,
      borderRadius: 0.5,
      backgroundColor: this.props.color,
      padding: 5
    },
    text: {
      fontSize: 40,
      color: this.props.textColor ? this.props.textColor : "black"
    }
  });

  render() {
    const {
      styles,
      props: { funcao, children }
    } = this;

    return (
      <TouchableOpacity style={styles.container} onPress={() => funcao(children)}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    );
  }
}
