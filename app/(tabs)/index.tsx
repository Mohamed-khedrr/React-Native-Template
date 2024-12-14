import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Icons from "@/constants/icons";
import Places from "@/constants/places";
import * as Animatable from "react-native-animatable";
import { router } from "expo-router";
import PlaceSliderCard from "@/components/PlaceSliderCard";

const Home = () => {
  const [activeLink, setActiveLink] = useState("MostViewed");
  const settingsIcon = Icons.getSettingsIcon();
  const links = [
    { id: "MostViewed", txt: "Most Viewed" },
    { id: "Nearby", txt: "Nearby" },
    { id: "Latest", txt: "Latest" },
  ];
  const handlePress = () => {
    router.push("/PlaceDetailsPage");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <View style={styles.headerTxt}>
            <Text style={styles.headerName}> Hi, David 👋</Text>
            <Text style={styles.headerExploreTxt}>Explore the world</Text>
          </View>
          <View style={styles.profileImgContainer}>
            <Image
              style={styles.profileImg}
              source={require("../../assets/images/home/user-profile.png")}
            />
          </View>
        </View>
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
        <View style={styles.popularContainer}>
          <Text style={styles.popularTxt}>Popular places</Text>
          <TouchableOpacity>
            <Text style={styles.popularBtn}>View all </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linksContainer}>
          {links.map((link, index) => {
            const isActive = activeLink === link.id;
            return (
              <Animatable.View
                delay={3 - index * 120}
                animation="slideInLeft"
                key={index}
                style={{ zIndex: 5, position: "relative" }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setActiveLink(link.id);
                  }}
                  style={[
                    styles.linkBtn,
                    { backgroundColor: isActive ? "#2F2F2F" : "#FBFBFB" },
                  ]}
                  key={link.id}
                >
                  <Text
                    style={[
                      styles.linkTxt,
                      { color: isActive ? "#FFF" : "#C5C5C5" },
                    ]}
                  >
                    {link.txt}
                  </Text>
                </TouchableOpacity>
              </Animatable.View>
            );
          })}
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.slider}
        >
          <View style={{ width: 5 }}></View>
          {Places.map((place, index) => {
            return (
              <PlaceSliderCard place={place} index={index} key={place.id} />
            );
          })}
          <View style={{ width: 5 }}></View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 34,
  },
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
    paddingStart: 8,
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
  linksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 45,
    marginHorizontal: 26,
  },
  linkBtn: {
    paddingHorizontal: 21,
    borderRadius: 20,
    height: 54,
    justifyContent: "center",
  },
  linkTxt: {
    fontWeight: 500,
    color: "#C5C5C5",
    lineHeight: 18,
  },
  slider: {
    gap: 22,
    marginBottom: 40,
  },
});
