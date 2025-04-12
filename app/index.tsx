import CustomButton from "@/components/CustomButton";
import Example from "@/components/Example";
import Form from "@/components/Form";
import { router } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen(){
    

    const [count, setCount ]= useState(0);
    const[name ,  setName]= useState("davi")
    return (
        <View style = {{flex:1, justifyContent: "center", alignItems: "center"}}>
            <Text>Bem vindo ao app, {name}</Text>
            <Text>Contador: {count}</Text>
            <Button title="Aumentar"
            onPress={() => {setCount(count + 1)}}/>
            <Button title="Diminuir"
              onPress={() => {setCount(count - 1)}}/>

              <Button title="reset"
              onPress={() => {setCount(count - count)}}/>
            
              <TextInput
              placeholder="digite seu nome"
              onChangeText={setName}
              />    
              <CustomButton title="Botão vsf" onPress={()=>{setCount(count + 1)}}/>
            <Example/>
            <Form/>
            <Button 
                title="stcak" 
                onPress={() => router.push('/navigation/stack')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 5
    }
});
