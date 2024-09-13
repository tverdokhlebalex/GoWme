import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import * as SecureStore from "expo-secure-store";

import AppNavigator from "./AppNavigator";
import AuthStack from "./AuthStack";

const AuthNavigator = () => {
  // Задаем правильный тип состояния (null | boolean)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await SecureStore.getItemAsync("authToken");
      setIsAuthenticated(!!token); // Устанавливаем true или false
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <ActivityIndicator />;
  }

  return isAuthenticated ? <AppNavigator /> : <AuthStack />;
};

export default AuthNavigator;
