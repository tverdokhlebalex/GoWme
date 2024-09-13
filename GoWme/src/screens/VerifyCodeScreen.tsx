import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types"; // Импортируем типы маршрутов

type VerifyCodeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "VerifyCode"
>;
type VerifyCodeScreenRouteProp = RouteProp<RootStackParamList, "VerifyCode">;

interface Props {
  navigation: VerifyCodeScreenNavigationProp;
  route: VerifyCodeScreenRouteProp;
}

const VerifyCodeScreen: React.FC<Props> = ({ route, navigation }) => {
  const [code, setCode] = useState<string>("");
  const { phoneNumber } = route.params;

  const handleVerifyCode = async () => {
    try {
      // Логика верификации кода
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Введите код из SMS для номера {phoneNumber}:</Text>
      <TextInput
        value={code}
        onChangeText={setCode}
        keyboardType="number-pad"
        placeholder="123456"
      />
      <Button title="Подтвердить" onPress={handleVerifyCode} />
    </View>
  );
};

export default VerifyCodeScreen;
