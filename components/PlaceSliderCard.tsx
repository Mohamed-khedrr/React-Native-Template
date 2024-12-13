import React from "react";
import { BlurView } from "expo-blur";
import * as Animatable from "react-native-animatable";
import { router } from "expo-router";

import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icons from "@/constants/icons";

const PlaceSliderCard = (props: any) => {
  const place = props.place;
  const index = props.index;
  const likeIcon = Icons.getLikeIcon();
  const placeIcon = Icons.getPlaceLocationIcon();
  const starIcon = Icons.getStarIcon();
  const handleNavigateToDetails = () => {
    router.push("/PlaceDetailsPage"); // Navigate to PlaceDetailsPage
  };
  return (
    <Animatable.View
      delay={index * 120}
      animation="slideInRight"
      style={styles.cardContainer}
    >
      <View style={styles.imgContainer}>
        <Image style={styles.slideImg} source={place.imgLink} />
      </View>
      <TouchableOpacity
        style={styles.likeBtn}
        onPress={handleNavigateToDetails}
      >
        <BlurView intensity={40} tint="dark" style={styles.bluredLike}>
          {likeIcon}
        </BlurView>
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <BlurView intensity={40} style={styles.bluredData}>
          <View style={{ flexDirection: "row", position: "relative", gap: 3 }}>
            <Text style={styles.placeName}>{place.placeName},</Text>
            <Text style={styles.placeCity}>{place.city}</Text>
          </View>

          <View style={styles.placeData}>
            <View
              style={{ flexDirection: "row", gap: 12, alignItems: "center" }}
            >
              {placeIcon}
              <View
                style={{ flexDirection: "row", gap: 4, alignItems: "center" }}
              >
                <Text style={styles.location}>{place.city},</Text>
                <Text style={styles.location}>{place.country}</Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              {starIcon}
              <Text style={styles.rating}>{place.rate}</Text>
            </View>
          </View>
        </BlurView>
      </View>
    </Animatable.View>
  );
};

export default PlaceSliderCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginBottom: 50,
    width: 270,
    height: "100%",
    position: "relative",
  },
  imgContainer: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
    borderRadius: 30,
    ...Platform.select({
      ios: {
        shadowColor: "#1D1D1D66",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 9,
      },
      android: {
        elevation: 9,
      },
    }),
  },
  slideImg: {
    height: "100%",
    minHeight: "100%",
    minWidth: "100%",
  },
  likeBtn: {
    position: "absolute",
    end: 17,
    top: 14,
    width: 44,
    height: 44,
    borderRadius: "50%",
    overflow: "hidden",
  },
  bluredLike: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#1D1D1D66",
    alignItems: "center",
  },
  detailsContainer: {
    position: "absolute",
    bottom: 25,
    left: 26,
    right: 26,
    borderRadius: 15,
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "#FFFFFF1A",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 9,
      },
      android: {
        elevation: 9,
      },
    }),
  },
  bluredData: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF1A",
    paddingTop: 11,
    paddingBottom: 16,
    paddingHorizontal: 16,
    gap: 13,
  },
  placeName: {
    fontWeight: 500,
    lineHeight: 18.7,
    color: "#FFF",
  },
  placeCity: {
    color: "#CAC8C8",
    fontSize: 14,
    fontWeight: 500,
  },
  placeData: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginStart: 1,
  },
  location: {
    color: "#CAC8C8",
  },
  rating: {
    fontSize: 14,
    color: "#CAC8C8",
  },
});
