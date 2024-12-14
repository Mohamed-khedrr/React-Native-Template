import Icons from "@/constants/icons";
import { BlurView } from "expo-blur";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DetailsHeader = (props: any) => {
  const { place, archiveIcon, arrowIcon } = props;
  const placeLocationIcon = Icons.getPlaceLocationIcon();
  const navigation = useNavigation();
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.placeImage} source={place.imgLink} />
      <View style={styles.headerBtns}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.goBack()}
        >
          <BlurView intensity={40} tint="default" style={styles.backBtn}>
            {arrowIcon}
          </BlurView>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <BlurView intensity={40} tint="default" style={styles.backBtn}>
            {archiveIcon}
          </BlurView>
        </TouchableOpacity>
      </View>
      <BlurView intensity={100} tint="dark" style={styles.placeData}>
        <View style={styles.placeNameContainer}>
          <Text style={styles.placeName}>{place.placeName}</Text>
          <View style={styles.locationContainer}>
            <Text>{placeLocationIcon}</Text>
            <View style={styles.locationDetails}>
              <Text style={styles.city}>{place.city},</Text>
              <Text style={styles.country}>{place.country}</Text>
            </View>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Price</Text>
          <View style={styles.priceDetails}>
            <Text style={styles.priceSymbol}>$</Text>
            <Text style={styles.priceValue}>{place.price}</Text>
          </View>
        </View>
      </BlurView>
    </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  imageContainer: {
    height: 460,
    position: "relative",
    borderRadius: 25.5,
    overflow: "hidden",
  },
  placeImage: {
    height: "100%",
    minHeight: "100%",
    minWidth: "100%",
  },
  headerBtns: {
    position: "absolute",
    top: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    left: 19,
    right: 19,
  },
  headerButton: {
    width: 44,
    height: 44,
    borderRadius: "50%",
  },
  backBtn: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1D1D1D4D",
    borderRadius: "50%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  placeData: {
    position: "absolute",
    bottom: 29,
    left: 22,
    right: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 15,
    paddingEnd: 22,
    paddingVertical: 18,
    borderRadius: 15,
    overflow: "hidden",
    // ...Platform.select({
    //   ios: {
    //     shadowColor: "#FFFFFF1A",
    //     shadowOffset: { width: 0, height: 5 },
    //     shadowOpacity: 0.4,
    //     shadowRadius: 9,
    //   },
    //   android: {
    //     // elevation: 9,
    //   },
    // }),
  },
  placeNameContainer: {
    gap: 18,
  },
  placeName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 29,
  },
  locationContainer: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  locationDetails: {
    flexDirection: "row",
    gap: 3,
    alignItems: "center",
  },
  city: {
    fontSize: 18,
    color: "#CAC8C8",
    lineHeight: 21,
  },
  country: {
    fontSize: 18,
    color: "#CAC8C8",
  },
  priceContainer: {
    gap: 13,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  priceLabel: {
    color: "#CAC8C8",
  },
  priceDetails: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  priceSymbol: {
    color: "#434343",
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 23,
  },
  priceValue: {
    fontSize: 20,
    fontWeight: 500,
    color: "#CAC8C8",
    lineHeight: 30,
  },
});
