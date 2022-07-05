import * as React from "react";

// import Component Native Base
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    Icon,
    IconButton,
    HStack,
    Divider,
} from "native-base";

export default function FormNativeBase() {
    return <Box bg="primary.100" p={10} flex={1} justifyContent="center">
        <Heading size="md" textAlign="center" mb={10}>Sign In</Heading>
        <FormControl mb={5}>
            <FormControl.Label _text={{color: "primary.800"}}>Email</FormControl.Label>
            <Input borderColor="primary.500" />
        </FormControl>
        <FormControl>
            <FormControl.Label _text={{color: "primary.800"}}>Password</FormControl.Label>
            <Input borderColor="primary.500" />
        </FormControl>
        <Button mt={5}>Sign In</Button>
    </Box>;
}