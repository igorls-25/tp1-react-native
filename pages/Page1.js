import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Page1({ navigation }) {
  const nome = "igor";
  const hora = new Date().toLocaleString();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meu nome é {nome} e são {hora}</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
