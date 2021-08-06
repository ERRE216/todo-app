import React, { useState } from "react";
import "react-native-get-random-values";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

import { Asset, useAssets } from "expo-asset";

//Imports Full Aplication
import Application from "./app/TodoApp";

//Constants Imports
import COLOR from "./app/constants/COLORS";
import AppLoading from "expo-app-loading";

export default function App() {
  const [assets] = useAssets([require("./assets/user.png")]);

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!assets || !fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 25,
        backgroundColor: COLOR.BACKGROUND_COLOR_SECONDARY,
      }}
    >
      <StatusBar style={"light"} translucent={true} />
      <Application />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
