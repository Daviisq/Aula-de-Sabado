import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Example() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Esse é um componente de exemplo
            </Text>

            <Text style={styles.text}>
                Esse daqui é uma repetição
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
    },
    text:{
        fontWeight: "bold"
    }
});