import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Painel from "./components/Painel";
import Teclado from "./components/Teclado";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20
  }
});

export default class App extends React.Component {
  state = {
    resultado: '0',
  }

  handleClick = (button) => {
    let { resultado } = this.state;
    if (button === '=') {
      resultado = eval(resultado)
    } else if (button === 'C') {
      resultado = '0'
    } else {
      resultado += button;
    }
    this.setState({ resultado });

  }

  render() {
    return (
      <View style={styles.container}>
        <Painel>{this.state.resultado}</Painel>
        <Teclado onPress={this.handleClick} />
      </View>
    );
  }
}
