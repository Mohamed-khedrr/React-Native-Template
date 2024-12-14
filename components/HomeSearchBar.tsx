// components/SearchBar.tsx
import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icons from "@/constants/icons";

const HomeSearchBar = () => {
  const settingsIcon = Icons.getSettingsIcon();

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search places"
          placeholderTextColor="#888888"
        />
      </View>
      <TouchableOpacity style={styles.searchIcon}>
        {settingsIcon}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#D2D2D2",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 31,
    height: 58,
    marginTop: 38,
    marginBottom: 42,
    marginHorizontal: 26,
    position: "relative",
    zIndex: 10,
  },
  searchInputContainer: {
    flex: 1,
  },
  searchInput: {
    fontSize: 16,
  },
  searchIcon: {
    paddingStart: 29,
    borderStartColor: "#D2D2D2",
    borderStartWidth: 2,
  },
});

export default HomeSearchBar;
