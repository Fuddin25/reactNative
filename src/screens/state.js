import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';

export default function State() {
  
  const [ counter, setCounter ] = useState(0)
  
  const Add = () => {
    setCounter(counter + 1)
  }
  
  const Less = () => {
    setCounter(counter - 1)
  }
  
  return (
    <View>
      <StatusBar />
      <Text>{counter}</Text>
      
      <TouchableOpacity onPress={Add}>
        <Text>Add</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={Less}>
        <Text>Less</Text>
      </TouchableOpacity>
      
    </View>
  );
}
