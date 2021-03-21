import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import SafeAreaView from 'react-native-safe-area-view';
import AppNavigator from "./routes/Navigator";

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={"black"} />

      <AppNavigator />
    </SafeAreaProvider>
  );
};
export default App;

const styles = StyleSheet.create({});

