import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image } from 'react-native';

import List from "../components/list";

export default function Props() {
  let pic = {
    uri: "https://images.unsplash.com/photo-1656918931725-2f9d9fce4acb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  }
  
  return (
    <View>
      <StatusBar />
      
      <Image 
        source={pic} 
        style={{
          width: "100%", 
          height: 200
        }}
      />
      
      <List title="BMW" />
      <List title="Mercedes-Benz" />
      <List title="Ducati" />
    </View>
  );
}
