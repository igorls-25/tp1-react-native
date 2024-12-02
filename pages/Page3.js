import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function Page3({ navigation }) {
  const [botaoPressionado, setBotaoPressionado] = useState('');
  const handlePress = (label) => {
    setBotaoPressionado(label);
  };
  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>
        {botaoPressionado ? `Você pressionou: ${botaoPressionado}` : 'Pressione um botão'}
      </Text>

      <TouchableOpacity
        style={[styles.button, styles.redButton]}
        onPress={() => handlePress('Vermelho')}
      >
        <Text style={styles.buttonText}>Vermelho</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.greenButton]}
        onPress={() => handlePress('Verde')}
      >
        <Text style={styles.buttonText}>Verde</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.blueButton]}
        onPress={() => handlePress('Azul')}
      >
        <Text style={styles.buttonText}>Azul</Text>
      </TouchableOpacity>
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
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 10,
  },
  redButton: {
    backgroundColor: '#FF0000',
  },
  greenButton: {
    backgroundColor: '#00FF00',
  },
  blueButton: {
    backgroundColor: '#0000FF',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
