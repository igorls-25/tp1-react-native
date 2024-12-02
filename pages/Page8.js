import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const Card = ({ filme }) => {
    return (
      <View style={styles.card}>
        <Image source={filme.imagem } style={styles.image} />
        <Text style={styles.titulo}>{filme.titulo}</Text>
        <Text style={styles.cinema}>Cinema: {filme.cinema}</Text>
        <Text style={styles.horario}>Horário: {filme.horario}</Text>
      </View>
    );
  };
export default function Page8({ navigation }) {

    const filme = {
        titulo: 'Memento',
        imagem: require("../assets/memento.png"),
        cinema: 'Cinemark',
        horario: '19:00',
      };
    
      return (
        <View style={styles.container}>
          <Card filme={filme} />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
      },
      card: {
        width: 300,
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 5,
        alignItems: 'center',
      },
      image: {
        width: 200,
        height: 300,
        borderRadius: 10,
        marginBottom: 15,
      },
      titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
      },
      cinema: {
        fontSize: 16,
        marginBottom: 5,
        color: '#666',
      },
      horario: {
        fontSize: 16,
        color: '#666',
      },
    });