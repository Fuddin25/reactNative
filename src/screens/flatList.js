import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, FlatList, Text } from "react-native";

export default function ListFlat() {
    // Create Dummy Data With Array
    const games = [
        {
            id: 1,
            name: "topWar"
        },
        {
            id: 2,
            name: "Archero"
        },
        {
            id: 3,
            name: "Dota 2"
        },
    ]

    return (
        <View>
            <StatusBar />
            <FlatList 
                data={games}
                renderItem={({item}) => <Text>{item.name}</Text>}
                keyExtractor={(item) => item.id.toString()}
                refreshing={true}
            />
        </View>
    )
}