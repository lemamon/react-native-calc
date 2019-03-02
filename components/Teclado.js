import React, { Component, Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default class Teclado extends Component {

  render() {

    const { onPress } = this.props;

    return (
      <Fragment>

        <View style={styles.buttons}>
          <Button size={3} color="#CBCBD0" funcao={onPress}>C</Button>
          <Button textColor="white" color="#FF7100" funcao={onPress}>/</Button>
        </View>

        <View style={styles.buttons}>
          <Button color="#CBCBD0" funcao={onPress}>7</Button>
          <Button color="#CBCBD0" funcao={onPress}>8</Button>
          <Button color="#CBCBD0" funcao={onPress}>9</Button>
          <Button textColor="white" color="#FF7100" funcao={onPress}>X</Button>
        </View>

        <View style={styles.buttons}>
          <Button color="#CBCBD0" funcao={onPress}>4</Button>
          <Button color="#CBCBD0" funcao={onPress}>5</Button>
          <Button color="#CBCBD0" funcao={onPress}>6</Button>
          <Button textColor="white" color="#FF7100" funcao={onPress}>-</Button>
        </View>

        <View style={styles.buttons}>
          <Button color="#CBCBD0" funcao={onPress}>1</Button>
          <Button color="#CBCBD0" funcao={onPress}>2</Button>
          <Button color="#CBCBD0" funcao={onPress}>3</Button>
          <Button textColor="white" color="#FF7100" funcao={onPress}>+</Button>
        </View>

        <View style={styles.buttons}>
          <Button size={2} color="#CBCBD0" funcao={onPress}>0</Button>
          <Button color="#CBCBD0" funcao={onPress}>.</Button>
          <Button textColor="white" color="#FF7100" funcao={onPress}>=</Button>
        </View>
      </Fragment>
    );
  }
}