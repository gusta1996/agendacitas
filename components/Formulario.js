import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function Formulario() {
    return(
        <>
        <View style={styles.formulario}>
          <Text style={styles.label}>Paciente: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto)=> console.log(texto)}
          />
        </View>
        <View style={styles.formulario}>
          <Text style={styles.label}>Dueño: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto)=> console.log(texto)}
          />
        </View>
        <View style={styles.formulario}>
          <Text style={styles.label}>Telefono de contacto: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto)=> console.log(texto)}
            keyboardType='numeric'
          />
        </View>
        <View style={styles.formulario}>
          <Text style={styles.label}>Síntomas: </Text>
          <TextInput
          multiline
            style={styles.input}
            onChangeText={(texto)=> console.log(texto)}
          />
        </View>
        </>
    )
}

const styles = StyleSheet.create ({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
    },
    input: {
        marginTop: 10,
        marginBottom: 0,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10
    }
})