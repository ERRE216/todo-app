import React, { useRef, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../constants/COLORS";

import { GlobalContext } from "../context/GlobalContext";

const AddButton = ({ onPressHandler }) => {
  const { state, addTask } = useContext(GlobalContext);

  return (
    <View style={[styles.floatingContainer]}>
      <TouchableOpacity
        onPress={() => {
          onPressHandler();
        }}
      >
        <View style={styles.button}>
          <MaterialCommunityIcons
            name={"plus"}
            size={35}
            color={COLORS.ADD_BUTTON_PLUS_COLOR}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingContainer: {
    backgroundColor: COLORS.ADD_BUTTON_BACKGROUND,
    position: "absolute",
    bottom: 50,
    right: 25,
    overflow: "hidden",
    borderRadius: 150,
    elevation: 5,
  },
  button: {
    padding: 15,
  },
});
export default AddButton;
