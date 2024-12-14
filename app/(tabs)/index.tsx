// Home.tsx
import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import HomeHeader from "@/components/HomeHeader";
import HomeSearchBar from "@/components/HomeSearchBar";
import HomePopular from "@/components/HomePopular";
import HomeLinkBtn from "@/components/HomeLinkBtn";
import PlaceSlider from "@/components/PlacesSlider";

const Home = () => {
  const [activeLink, setActiveLink] = useState("MostViewed");
  const links = [
    { id: "MostViewed", txt: "Most Viewed" },
    { id: "Nearby", txt: "Nearby" },
    { id: "Latest", txt: "Latest" },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <HomeHeader />
        <HomeSearchBar />
        <HomePopular />
        <HomeLinkBtn
          links={links}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <PlaceSlider />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 34,
  },
});

export default Home;
