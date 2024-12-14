import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

import { View, StyleSheet, Text } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  SplashScreen.hideAsync();

  // const [loaded] = useFonts({
  //   SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  // });

  const [loaded, setLoaded] = useState(false);

  setTimeout(() => {
    setLoaded(true);
  }, 5000);

  useEffect(() => {
    if (loaded) {
    }
  }, [loaded]);

  if (!loaded) {
    return <Text>Hello</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, statusBarHidden: true }}
        />
        <Stack.Screen
          name="PlaceDetailsPage"
          options={{ headerShown: false, statusBarHidden: true }}
        />
      </Stack>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
