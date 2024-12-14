import CustomSplashScreen from "@/components/CustomSplashScreen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

SplashScreen.preventAutoHideAsync(); // Prevent auto-hide of the splash screen

export default function RootLayout() {
  const [loaded, setLoaded] = useState(false);
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Lobster: require("../assets/fonts/Lobster-Regular.ttf"),
  });

  setTimeout(() => {
    setLoaded(true);
  }, 3000);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  if (!loaded) {
    return <CustomSplashScreen />;
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
