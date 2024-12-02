import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function Page11() {
  const [palavraSolicitada, setPalavrasolicitada] = useState('');
  const [resultado, setResultado] = useState(null);

  const verificarResposta = () => {
    const palavraLimpa = palavraSolicitada.trim().toLowerCase().replace(/\s/g, ''); 
    const palavraInversa = palavraLimpa.split('').reverse().join('');
    setResultado(palavraLimpa === palavraInversa);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione uma frase para descobrir se é um palíndromo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite uma palavra ou frase"
        keyboardType="default"
        value={palavraSolicitada}
        onChangeText={(text) => setPalavrasolicitada(text)}
      />
      <Button title="Verificar" onPress={verificarResposta} />
      {resultado !== null && (
        <Text>
          {resultado ? 'A palavra ou frase é um palíndromo.' : 'A palavra ou frase não é um palíndromo.'}
        </Text>
      )}
    </View>
  );
}
    

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '60%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 4,
      marginBottom: 4,
      backgroundColor: '#fff',
    },
  });
