import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import PlaceSliderCard from "./PlaceSliderCard";
import Places from "@/constants/places";

const PlaceSlider = () => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.slider}
  >
    <View style={{ width: 5 }}></View>
    {Places.map((place, index) => (
      <PlaceSliderCard place={place} index={index} key={place.id} />
    ))}
    <View style={{ width: 5 }}></View>
  </ScrollView>
);

const styles = StyleSheet.create({
  slider: {
    gap: 22,
    marginBottom: 40,
  },
});

export default PlaceSlider;
