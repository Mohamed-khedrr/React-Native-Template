import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Icons from "@/constants/icons";

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const isFocused = state.index === index;

        const icons: any = {
          index: Icons.getLocationIcon(isFocused),
          recentPlaces: Icons.getClockIcon(isFocused),
          likedPlaces: Icons.getHeartIcon(isFocused),
          profile: Icons.getUserIcon(isFocused),
        };

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
          >
            <View style={styles.tabBarItem}>
              {icons[route.name]}
              <View
                style={[
                  styles.tabBarActiveCircle,
                  { backgroundColor: isFocused ? "#FF4A4A" : "#fff" },
                ]}
              ></View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBar: {
    position: "sticky",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 1,
    paddingTop: 10,
    paddingBottom: 61,
  },
  tabBarItem: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 9,
  },
  tabBarActiveCircle: {
    width: 8,
    height: 8,
    borderRadius: "100%",
  },
});
