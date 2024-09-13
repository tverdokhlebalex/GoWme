import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types"; // Импортируем типы маршрутов

import LoginScreen from "../screens/LoginScreen";
import VerifyCodeScreen from "../screens/VerifyCodeScreen";

const Stack = createStackNavigator<RootStackParamList>(); // Используем типы маршрутов

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
  </Stack.Navigator>
);

export default AuthStack;
