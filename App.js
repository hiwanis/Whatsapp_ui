import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";
import Actions from "./components/Actions/Actions";
import Header from "./components/Header/Header";
import Chat from "./components/Chat/Chat";

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header />
      <ImageBackground style={styles.imageBackground} resizeMode="cover">
        <Chat />
        <Actions />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  imageBackground: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
