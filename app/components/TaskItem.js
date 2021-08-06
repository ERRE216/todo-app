import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { GlobalContext } from "../context/GlobalContext";

import COLORS from "../constants/COLORS";
import { useEffect } from "react";

const TaskItem = ({ data }) => {
  const { getCategoryColor, toggleTaskDone } = useContext(GlobalContext);

  const [color, setColor] = useState("transparent");

  useEffect(() => {
    setColor(() => getCategoryColor(data.category));
  }, [data.done]);

  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity
        style={styles.rowCentered}
        onPress={() => {
          toggleTaskDone(data.id, data.category);
        }}
      >
        <View
          style={[
            styles.checkBoxContainer,
            {
              backgroundColor: data.done ? color : "transparent",
              borderColor: color,
            },
          ]}
        >
          <MaterialCommunityIcons
            style={styles.checkBox}
            name={"check"}
            size={20}
            color={COLORS.CARD_BACKGROUND_COLOR}
          />
        </View>
        <Text style={styles.taskTitle}>{data.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: COLORS.CARD_BACKGROUND_COLOR,
    padding: 15,
    paddingHorizontal: 25,
    margin: 7,
    marginHorizontal: 15,
    borderRadius: 20,
  },
  taskTitle: {
    color: COLORS.TEXT_COLOR_SECONDARY,
    paddingLeft: 15,
    fontSize: 15,
    fontFamily: "Roboto_300Light",
  },
  checkBox: {
    padding: 3,
  },
  checkBoxContainer: {
    overflow: "hidden",
    borderRadius: 50,
    borderColor: "pink",
    borderWidth: 2,
    backgroundColor: "red",
  },
  rowCentered: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default TaskItem;
