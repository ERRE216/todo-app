import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import COLORS from "../constants/COLORS";

import TaskItem from "./TaskItem";

const TasksList = (props) => {
  if (props.data.length <= 0) {
    return (
      <View style={[styles.taskContainer, styles.rowCentered]}>
        <Text style={styles.noTaskTitle}>There are no tasks! Add some.</Text>
      </View>
    );
  }
  return (
    <>
      <FlatList
        data={props.data}
        renderItem={({ item }) => <TaskItem key={item.id} data={item} />}
      />
    </>
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
  noTaskTitle: {
    color: COLORS.TEXT_COLOR_SECONDARY_LIGHTER,
    fontSize: 17,
    fontFamily: "Roboto_300Light_Italic",
  },
  rowCentered: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TasksList;
