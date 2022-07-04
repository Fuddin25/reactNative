import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from 'react-native';

export default function EmbedExpression() {
  function getMajor() {
    return "Full-Stack"
  }
  const companyName = "dumbwaysIndonesia"
  return (
    <View>
      <StatusBar />
      Welcome to {companyName} Class {getMajor()}
    </View>
  );
}