import Icons from "@/constants/icons";
import { StyleSheet, Text, View } from "react-native";
import DetailsDataItem from "./DetailsDataItem";

const PlaceDetailsDataItem = (props: any) => {
  const { place } = props;
  const locationIcon = Icons.getPlaceLocationIcon();
  const dataArray = [
    { id: "dataHours", icon: locationIcon, value: place.time, txt: "hours" },
    { id: "dataTemp", icon: locationIcon, value: place.degree, txt: "°C" },
    { id: "dataRate", icon: locationIcon, value: place.rate, txt: "" },
  ];

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.detailsHeader}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.sectionDescription}>Details</Text>
      </View>
      <View style={styles.detailsContent}>
        <View style={styles.dataItemContainer}>
          {dataArray.map((dataItem, index) => (
            <DetailsDataItem key={dataItem.id} dataItem={dataItem} />
          ))}
        </View>
        <Text style={styles.description}>{place.description}</Text>
        <Text style={styles.description}>{place.description}</Text>
        <Text style={styles.description}>{place.description}</Text>
      </View>
    </View>
  );
};

export default PlaceDetailsDataItem;

const styles = StyleSheet.create({
  detailsContainer: {
    marginTop: 40,
    marginBottom: 32,
  },
  detailsHeader: {
    flexDirection: "row",
    gap: 32,
    alignItems: "center",
  },
  sectionDescription: {
    color: "#1B1B1B9E",
    fontWeight: 600,
    lineHeight: 19,
  },
  detailsContent: {
    marginVertical: 34,
  },
  dataItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 34,
  },
  description: {
    color: "#1B1B1B",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
  },
  sectionTitle: {
    color: "#1B1B1B",
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 26,
  },
});