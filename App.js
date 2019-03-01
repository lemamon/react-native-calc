import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Button from "./components/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
  },
  result: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 50,
    flex: 1,
    color: '#fff',
    backgroundColor: '#000',
    textAlign: 'right',
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

        <View style={styles.result}>
          <Text style={styles.text}>{this.state.resultado}</Text>
        </View>

        <View style={styles.buttons}>
          <Button size={3} color="#CBCBD0" funcao={this.handleClick}>C</Button>
          <Button textColor="white" color="#FF7100" funcao={this.handleClick}>/</Button>
        </View>

        <View style={styles.buttons}>
          <Button color="#CBCBD0" funcao={this.handleClick}>7</Button>
          <Button color="#CBCBD0" funcao={this.handleClick}>8</Button>
          <Button color="#CBCBD0" funcao={this.handleClick}>9</Button>
          <Button textColor="white" color="#FF7100" funcao={this.handleClick}>X</Button>
        </View>

        <View style={styles.buttons}>
          <Button color="#CBCBD0" funcao={this.handleClick}>4</Button>
          <Button color="#CBCBD0" funcao={this.handleClick}>5</Button>
          <Button color="#CBCBD0" funcao={this.handleClick}>6</Button>
          <Button textColor="white" color="#FF7100" funcao={this.handleClick}>-</Button>
        </View>

        <View style={styles.buttons}>
          <Button color="#CBCBD0" funcao={this.handleClick}>1</Button>
          <Button color="#CBCBD0" funcao={this.handleClick}>2</Button>
          <Button color="#CBCBD0" funcao={this.handleClick}>3</Button>
          <Button textColor="white" color="#FF7100" funcao={this.handleClick}>+</Button>
        </View>

        <View style={styles.buttons}>
          <Button size={2} color="#CBCBD0" funcao={this.handleClick}>0</Button>
          <Button color="#CBCBD0" funcao={this.handleClick}>.</Button>
          <Button textColor="white" color="#FF7100" funcao={this.handleClick}>=</Button>
        </View>
      </View>
    );
  }
}
