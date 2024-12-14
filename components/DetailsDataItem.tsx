import { StyleSheet, Text, View } from "react-native";

const DetailsDataItem = (props: any) => {
  const dataItem = props.dataItem;
  return (
    <View style={styles.dataItem}>
      <View style={styles.dataItemIcon}>{dataItem.icon}</View>
      <Text style={styles.dataItemValue}>
        {dataItem.value} {dataItem.txt}
      </Text>
    </View>
  );
};

export default DetailsDataItem;

const styles = StyleSheet.create({
  dataItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  dataItemIcon: {
    backgroundColor: "#EDEDED",
    borderRadius: 6,
    height: 34,
    width: 34,
    justifyContent: "center",
    alignItems: "center",
  },
  dataItemValue: {
    color: "#7E7E7E",
    fontSize: 18,
    fontWeight: 500,
  },
});
