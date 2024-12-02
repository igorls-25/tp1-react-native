import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function Page4({ navigation }) {
    const fotos =[{
        nome: "Ekko",
        url:require("../assets/ekko.png"),
        descricao:"Ekko, o menino que estilhaçõu o tempo"
    },
    {
        nome: "Jinx",
        url:require("../assets/jinx.png"),
        descricao:"Jinx, a gatilho desenfreado"
    },
    {
        nome: "Vi",
        url:require("../assets/vi.png"),
        descricao:"Vi, a defensora de piltover"
    }
    ];

    const [personagem, setPersonagem] = useState(fotos[0]);
    function gerarNovoCard(){
        const numeroAleatorio = Math.floor(Math.random() * 3);
        setPersonagem(fotos[numeroAleatorio]);    
    }

return (
    <View style={styles.container}>
    <Image style={styles.image} source={personagem.url} />
    <Text style={styles.descricao}>{personagem.descricao}</Text>
    <Text style={styles.text}>{personagem.nome}</Text>
    <Button onPress={gerarNovoCard} title='Trocar personagem'/>
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
image: {
    width: 150,
    height: 150,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  }
});
