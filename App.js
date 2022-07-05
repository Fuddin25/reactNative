import React from "react";
// import "NativeBaseProvider" component
import { NativeBaseProvider, extendTheme } from "native-base";

// import font with Expo
import AppLoading from "expo-app-loading";
import { useFonts, BalsamiqSans_400Regular, BalsamiqSans_700Bold_Italic } from "@expo-google-fonts/balsamiq-sans";

// import Container
import Container from "./Container";

export default function App() {
  // Load Font with Expo
  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_700Bold_Italic
  })

  // Setup Font
  const fontConfig = {
    BalsamiqSans: {
      400: {
        normal: "BalsamiqSans_400Reguler",
        italic: "BalsamiqSans_400Reguler_Italic"
      }
    }
  }

  // Setup Theme
  const customColor = {
    primary: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
  }

  // Configuration Native Base Custom Theme 
  const theme = extendTheme({
    colors: customColor,
    fontConfig,
    fonts: {
      header: "BalsamiqSans",
      body: "BalsamiqSans",
      mono: "BalsamiqSans",
    },
  })

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
      return (
      // Setup Provider
        <NativeBaseProvider theme={theme}>
          <Container />
        </NativeBaseProvider>
    )
  }
  
}


