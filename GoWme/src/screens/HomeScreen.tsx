import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import YaMap from 'react-native-yamap'; // Импорт библиотеки карт

YaMap.init('YOUR_YANDEX_API_KEY'); // Инициализация с API-ключом

export default function HomeScreen() {
  useEffect(() => {
    // Здесь можно добавить дополнительную логику для загрузки карты или геолокации
  }, []);

  return (
    <View style={styles.container}>
      <YaMap
        style={styles.map}
        showUserPosition={true} // Показывает текущее местоположение пользователя
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});