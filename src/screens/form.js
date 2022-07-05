import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function List() {
  return (
    <View style={style.container}>
      <StatusBar />
      <Text style={style.header}>Sign In</Text>

      <Text style={style.textStyleInput}>Email</Text>
      <TextInput style={style.textInput} />

      <Text style={style.textStyleInput}>Password</Text>
      <TextInput style={style.textInput} />

      <TouchableOpacity style={style.button}>
       <Text style={style.textButton}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50
  },
  textStyleInput: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5
  },
  textInput: {
    borderColor: "#162a91",
    borderWidth: 1,
    borderRadius: 5,
    height: 45,
    marginBottom: 15,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: "#162a91",
    borderRadius: 5,
    height: 40,
    justifyContent: "center"
  },
  textButton: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
})

