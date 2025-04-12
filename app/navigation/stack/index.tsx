import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function StackHome(){
    const router = useRouter();
    return(
      <View>
        <Text>Tela Inicial</Text>
        <Button 
            title="Detalher"
            onPress={() => router.push('/navigation/stack/details')} 
        />
      </View>  
    );
}