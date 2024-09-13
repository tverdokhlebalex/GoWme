import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as Location from "expo-location";

const MapScreen = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Доступ к геолокации запрещен");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  return (
    <View>
      {location ? (
        <Text>
          Широта: {location.coords.latitude}, Долгота:{" "}
          {location.coords.longitude}
        </Text>
      ) : (
        <Text>Загрузка местоположения...</Text>
      )}
    </View>
  );
};

export default MapScreen;
