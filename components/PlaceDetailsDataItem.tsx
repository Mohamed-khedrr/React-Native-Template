import Icons from "@/constants/icons";
import { StyleSheet, Text, View } from "react-native";
import DetailsDataItem from "./DetailsDataItem";

const PlaceDetailsDataItem = (props: any) => {
  const { place } = props;
  const locationIcon = Icons.getPlaceLocationIcon();
  const dataArray = [
    {
      id: "dataHours",
      icon: Icons.getFilledClock(),
      value: place.time,
      txt: "hours",
    },
    {
      id: "dataTemp",
      icon: Icons.getCloudIcon(),
      value: place.degree,
      txt: "°C",
    },
    {
      id: "dataRate",
      icon: Icons.getFilledStarIcon(),
      value: place.rate,
      txt: "",
    },
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
    marginBottom: 150,
  },
  dataItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 34,
  },
  description: {
    color: "#A5A5A5",
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 27,
  },
  sectionTitle: {
    color: "#1B1B1B",
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 26,
  },
});
