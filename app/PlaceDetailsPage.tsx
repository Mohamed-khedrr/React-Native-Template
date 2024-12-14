import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Icons from "@/constants/icons";
import Places from "@/constants/places";
import PlaceDetailsDataItem from "@/components/PlaceDetailsDataItem";
import DetailsHeader from "@/components/DetailsHeader";
import { View } from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";

const PlaceDetailsPage = () => {
  const place = Places[1];
  const archiveIcon = Icons.getArchiveIcon();
  const arrowIcon = Icons.getArrowIcon();
  const sendIcon = Icons.getSendIcon();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DetailsHeader
          place={place}
          archiveIcon={archiveIcon}
          arrowIcon={arrowIcon}
        />
        <PlaceDetailsDataItem place={place} />
      </ScrollView>
      <LinearGradient
        colors={["transparent", "#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.4 }}
        style={{
          position: "absolute",
          bottom: 0,
          height: 200,
          left: 0,
          right: 0,
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          style={{
            marginHorizontal: 28,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 56,
            gap: 20,
            backgroundColor: "#1B1B1B",
            height: 66,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            Book Now
          </Text>
          {sendIcon}
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingTop: 28,
    position: "relative",
    backgroundColor: "#fff",
  },
});

export default PlaceDetailsPage;
