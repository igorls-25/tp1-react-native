import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function Page5({ navigation }) {
const [numero,setNumero] = useState(0);
return (
    <View style={styles.container}>
        <Text style={styles.text}>{numero}</Text>

        <TouchableOpacity
            style={[styles.button]}
            onPress={() => setNumero(numero + 1)}
        >
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.button]}
            onPress={() => setNumero(numero - 1)}
      
        >
            <Text style={styles.text}>-</Text>
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
    fontSize: 18,
},
button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 10,
    backgroundColor: 'blue'
  }
});
