import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

const HomeLinkBtn = (props: any) => {
  const links: any[] = props.links;
  const { activeLink, setActiveLink } = props as any;

  return (
    <View style={styles.linksContainer}>
      {links.map((link, index) => {
        const isActive = activeLink === link.id;
        return (
          <Animatable.View
            delay={3 - index * 120}
            animation="slideInLeft"
            key={index}
            style={{ zIndex: 5, position: "relative" }}
          >
            <TouchableOpacity
              onPress={() => setActiveLink(link.id)}
              style={[
                styles.linkBtn,
                { backgroundColor: isActive ? "#2F2F2F" : "#FBFBFB" },
              ]}
            >
              <Text
                style={[
                  styles.linkTxt,
                  { color: isActive ? "#FFF" : "#C5C5C5" },
                ]}
              >
                {link.txt}
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  linksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 45,
    marginBottom: "8.5%",
    marginHorizontal: 26,
  },
  linkBtn: {
    paddingHorizontal: 21,
    borderRadius: 20,
    height: 54,
    justifyContent: "center",
  },
  linkTxt: {
    fontWeight: 500,
    color: "#C5C5C5",
    lineHeight: 18,
  },
});

export default HomeLinkBtn;
