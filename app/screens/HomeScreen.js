import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Modal } from "react-native";
import Animated from "react-native-reanimated";

//Screen Components
import Navigation from "../components/Navigation";
import CategoryList from "../components/CategoryList";
import TasksList from "../components/TasksList";
import AddButton from "../components/AddButton";

//Screen
import AddTaskScreen from "./AddTaskScreen";

//Imports Color Defined As Constants for reuse in the whole app
import COLORS from "../constants/COLORS";

//Import Animations that will be reused in the whole app
import ANIMATIONS from "../animations/ANIMATIONS";
import { GlobalContext } from "../context/GlobalContext";

function HomeScreen({ navigation }) {
  const { state, getAllTasks } = useContext(GlobalContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Animated.View style={[styles.container, ANIMATIONS.SCREEN_ANIMATION()]}>
      <View style={{ flex: 2 }}>
        <Navigation />
        <Text style={styles.header}>Welcome,{state.userInfo.userName}</Text>
      </View>
      <View style={{ flex: 3 }}>
        <Text style={styles.header2}>Categories</Text>
        <CategoryList data={state.categories} />
      </View>
      <View style={{ flex: 6 }}>
        <Text style={[styles.header2, { paddingVertical: 15 }]}>
          Today's Tasks
        </Text>
        <TasksList data={getAllTasks()} />
      </View>
      <AddButton
        onPressHandler={() => {
          setModalVisible(!modalVisible);
        }}
      />
      <AddTaskScreen
        visible={modalVisible}
        closeModalHandler={() => {
          setModalVisible(false);
        }}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR_MAIN,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  header: {
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 35,
    color: COLORS.TEXT_COLOR_SECONDARY,
    fontFamily: "Roboto_900Black",
  },
  header2: {
    color: COLORS.ICONS_COLOR,
    paddingLeft: 30,
    paddingVertical: 5,
    fontSize: 13,
    fontFamily: "Roboto_300Light",
  },
});

export default HomeScreen;
