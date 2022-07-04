import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

export default function Event() {
  function Greeting() {
    alert("Good Morning") 
  }
  
  return (
    <View>
      <StatusBar />
      
      <Text> Click "Hello" to show alert </Text>
      <TouchableOpacity onPress={() => alert("Hello World")}>
        <Text>Hello</Text>
      </TouchableOpacity>
      
      <Text> Click "Greeting" to show alert </Text>
      <TouchableOpacity onPress={Greeting}>
        <Text>Greeting</Text>
      </TouchableOpacity>
      
    </View>
  );
}
