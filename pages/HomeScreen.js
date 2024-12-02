import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione um exercício</Text>
      <View style={styles.buttonsContainer}>
        {Array.from({ length: 15 }).map((_, index) => (
          <View style={styles.buttonWrapper} key={index}>
            <Button
              title={`Exercicio ${index + 1}`}
              onPress={() => navigation.navigate(`Page${index + 1}`)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    margin: 10,
    width: '45%',
  },
});
