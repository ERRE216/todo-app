import React, { useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerItemList } from "@react-navigation/drawer";

import { WIDTH, HEIGHT } from "../constants/DIMENSIONS";
import COLORS from "../constants/COLORS";
import UserProfileImage from "./UserProfileImage";

import { GlobalContext } from "../context/GlobalContext";

function DrawerNavigation(props) {
  const { state } = useContext(GlobalContext);

  return (
    <View style={styles.drawer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <UserProfileImage />
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        >
          <MaterialCommunityIcons
            name={"chevron-left"}
            size={37}
            color={"white"}
            style={{
              borderWidth: 1,
              borderColor: COLORS.ICONS_COLOR,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{state.userInfo.userName}</Text>
        <Text style={styles.headerTitle}>{state.userInfo.userLastName}</Text>
      </View>

      <ScrollView
        style={styles.scrollableItems}
        bounces={false}
        showsVerticalScrollIndicator={false}
        overScrollMode={"never"}
      >
        <DrawerItemList
          {...props}
          pressColor={"transparent"}
          activeTintColor='white'
          activeBackgroundColor='transparent'
          inactiveTintColor={COLORS.ICONS_COLOR}
          inactiveBackgroundColor='transparent'
          labelStyle={{ fontFamily: "Roboto_300Light" }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: (HEIGHT * 0.1) / 2,
    backgroundColor: COLORS.BACKGROUND_COLOR_SECONDARY,
  },
  scrollableItems: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 15,
  },
  item: {},
  headerContainer: {
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  headerTitle: {
    color: "white",
    fontSize: 30,
    paddingLeft: 10,
    fontFamily: "Roboto_900Black",
  },
});

export default DrawerNavigation;
