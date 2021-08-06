import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../constants/COLORS";

export default function Navigation() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.navigation}>
        <TouchableOpacity
          styles={styles.leftMenu}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <MaterialCommunityIcons
            color={COLORS.ICONS_COLOR}
            size={32}
            name={"menu"}
          />
        </TouchableOpacity>

        <View style={styles.rightMenu}>
          <MaterialCommunityIcons
            color={COLORS.ICONS_COLOR}
            size={32}
            name={"magnify"}
            style={{ paddingRight: 20 }}
          />
          <MaterialCommunityIcons
            color={COLORS.ICONS_COLOR}
            size={32}
            name={"bell-outline"}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  navigation: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 35,
  },
  rightMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
