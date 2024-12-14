import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const HomeHeader = () => (
  <View style={styles.headerContainer}>
    <View style={styles.headerTxt}>
      <Text style={styles.headerName}>Hi, David 👋</Text>
      <Text style={styles.headerExploreTxt}>Explore the world</Text>
    </View>
    <View style={styles.profileImgContainer}>
      <Image
        style={styles.profileImg}
        source={require("../assets/images/home/user-profile.png")}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 26,
  },
  headerTxt: {
    gap: 9,
  },
  headerName: {
    fontSize: 30,
    lineHeight: 36.5,
    fontWeight: 600,
    color: "#2F2F2F",
  },
  headerExploreTxt: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24.2,
    color: "#888888",
  },
  profileImgContainer: {
    width: 50,
    height: 50,
    borderRadius: "100%",
    overflow: "hidden",
  },
  profileImg: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default HomeHeader;
