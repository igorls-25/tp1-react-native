import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function Page10({ navigation }) {
    const [numeroSolicitado, setNumerosolicitado] = useState('');
    const [resultado, setResultado] = useState('');


    const verificarResposta = () => {
        const num = parseInt(numeroSolicitado, 10);
        if (isNaN(num) || num < 2) {
          setResultado('Por favor, insira um número maior ou igual a 2.');
          return;
        }
      
        let primo = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            primo = false;
            break;
          }
        }
      
        const resposta = primo ? 'O número é Primo.' : 'O número não é Primo.';
        setResultado(resposta);
      };
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Selecione um número para descobrir se é primo: </Text>
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
    