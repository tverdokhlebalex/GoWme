import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types"; // Импортируем типы маршрутов

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleSendCode = async () => {
    try {
      // Логика отправки кода
      navigation.navigate("VerifyCode", { phoneNumber });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Введите номер телефона:</Text>
      <TextInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        placeholder="+7XXXXXXXXXX"
      />
      <Button title="Отправить код" onPress={handleSendCode} />
    </View>
  );
};

export default LoginScreen;
