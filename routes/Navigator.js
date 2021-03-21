import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../src/SplashScreen";
import SongsList from "../src/SongsList";
import DetailsScreen from "../src/DetailsScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="SongsList" component={SongsList} />

        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

