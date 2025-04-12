import React, { useState } from "react";
import { Button , Text, TextInput, View } from "react-native";

export default function Form() {
    const [name, setName] = useState("");
    const [idade, setIdade] = useState("");
    const [cpf, setCpf] = useState("");

    const [mostrar , setMostrar] = useState(false);    

    function mostrarTexto(){
        return(
            <View>
                <Text>Nome: {name}</Text>
                <Text>Idade: {idade}</Text>
                <Text>CPF: {cpf}</Text>
            </View>
        )
    }

    return (
        <View style={{ padding: 20 }}>
            <TextInput placeholder="N° do Cartão" onChangeText={setName}/>
            <TextInput placeholder="CVC" onChangeText={setIdade}/>
            <TextInput placeholder="Senha" onChangeText={setCpf}/>

            <Button title="Mostrar Informações" onPress={() => (setMostrar(true))}/>

            {mostrar ? mostrarTexto() : ''}
        </View>
    );
}