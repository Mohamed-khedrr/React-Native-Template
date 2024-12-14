import Icons from "@/constants/icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CustomSplashScreen = () => {
  const globalIcon = Icons.getGlobalIcon();
  return (
    <LinearGradient colors={["#0172B2", "#001645"]} style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>Travel</Text>
        {globalIcon}
      </View>
      <View>
        <Text style={styles.description}>Find Your Dream</Text>
        <Text style={styles.description}>Destination With Us</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    marginBottom: 40,
  },
  headerTxt: {
    textAlign: "center",
    fontSize: 44,
    lineHeight: 55,
    color: "#FFFFFF",
    fontFamily: "Lobster",
  },
  description: {
    textAlign: "center",
    color: "#E8E8E8",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 30,
  },
});

export default CustomSplashScreen;
