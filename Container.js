import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, Box, View } from "react-native";

// import components
import Header from "./src/components/header";
import Content from "./src/components/content";

// import screens
import EmbedExpression from "./src/screens/embedExpression";
import Event from "./src/screens/event";
import Props from "./src/screens/props";
import State from "./src/screens/state";
import Form from "./src/screens/form";
import Map from "./src/screens/map";
import ListFlat from "./src/screens/flatList";
import Hello from "./src/screens/hello";
import FormNativeBase from "./src/screens/formNativeBase";

export default function Container() {
    return <FormNativeBase />

    // (
    //     <View>
    //         <StatusBar />
    //         <Header />
    //         <Content />
    //         <EmbedExpression />
    //         <Event />
    //         <Props />
    //         <State />
    //         <Form />
    //         <Map />
    //         <ListFlat />
    //     </View>
    // ) // use Screen
}