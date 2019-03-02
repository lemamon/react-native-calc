import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
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

const Painel = ({ children }) => (
  <View style={styles.result}>
    <Text style={styles.text}>{children}</Text>
  </View>
);

export default Painel;