import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function Page9({ navigation }) {
    const [numeroSolicitado, setNumerosolicitado] = useState('');
    const [resultado, setResultado] = useState('');


    const verificarResposta = () => {
        const num = parseInt(numeroSolicitado, 10);
        if (isNaN(num)) {
          setResultado('Número inválido, tente novamente!');
        } else {
          const resposta = num % 2 === 0 ? 'O número é Par.' : 'O número é Ímpar.';
          setResultado(resposta);
        }
      };
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Par ou Ímpar ?</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite um número"
            keyboardType="numeric"
            value={numeroSolicitado}
            onChangeText={(text) => setNumerosolicitado(text)}
          />
          <Button title="Verificar" onPress={verificarResposta} />
          {resultado ? <Text>{resultado}</Text> : null}
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
    