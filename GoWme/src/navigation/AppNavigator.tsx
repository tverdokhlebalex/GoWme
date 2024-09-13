import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types"; // Импортируем типы маршрутов

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import VerifyCodeScreen from "../screens/VerifyCodeScreen";

const Stack = createStackNavigator<RootStackParamList>(); // Используем типы маршрутов

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
