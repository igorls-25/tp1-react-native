import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function Page12() {
  const [dataNascimento, setDataNascimento] = useState('');
  const [idade, setIdade] = useState(null);

  const calcularIdade = () => {
    if (!dataNascimento) {
      alert('Por favor, insira uma data e hora de nascimento.');
      return;
    }

    const agora = new Date();
    const nascimento = new Date(dataNascimento);

    if (isNaN(nascimento)) {
      alert('Por favor, insira uma data válida no formato YYYY-MM-DDTHH:MM.');
      return;
    }

    const diferenca = agora - nascimento; // Diferença em milissegundos

    // Conversões para diferentes unidades de tempo
    const minutos = Math.floor(diferenca / (1000 * 60));
    const horas = Math.floor(diferenca / (1000 * 60 * 60));
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30.44)); // Aproximação
    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25)); // Aproximação

    setIdade({ anos, meses, dias, horas, minutos });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule sua Idade</Text>
      <Text style={styles.label}>Digite sua data e hora de nascimento:</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DDTHH:MM"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />
      <Button title="Calcular Idade" onPress={calcularIdade} />
      {idade && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Anos: {idade.anos}</Text>
          <Text style={styles.resultText}>Meses: {idade.meses}</Text>
          <Text style={styles.resultText}>Dias: {idade.dias}</Text>
          <Text style={styles.resultText}>Horas: {idade.horas}</Text>
          <Text style={styles.resultText}>Minutos: {idade.minutos}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    marginVertical: 2,
  },
});
    