// components/PopularPlaces.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomePopular = () => (
  <View style={styles.popularContainer}>
    <Text style={styles.popularTxt}>Popular places</Text>
    <TouchableOpacity>
      <Text style={styles.popularBtn}>View all</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  popularContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
    marginHorizontal: 26,
    zIndex: 8,
  },
  popularTxt: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 30,
    color: "#2F2F2F",
  },
  popularBtn: {
    position: "relative",
    right: -1,
    color: "#888888",
    fontWeight: 600,
  },
});

export default HomePopular;
