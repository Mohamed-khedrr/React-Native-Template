import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Icons from "@/constants/icons";
import Places from "@/constants/places";
import PlaceDetailsDataItem from "@/components/PlaceDetailsDataItem";
import DetailsHeader from "@/components/DetailsHeader";

const PlaceDetailsPage = () => {
  const place = Places[1];
  const archiveIcon = Icons.getArchiveIcon();
  const arrowIcon = Icons.getArrowIcon();

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 28,
    marginTop: 28,
  },
});

export default PlaceDetailsPage;
