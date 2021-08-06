import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import COLORS from "../constants/COLORS";

const CategoryItem = (props) => {
  const animation = useSharedValue({ width: 0 });

  const animationStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(animation.value.width, {
        duration: 200,
      }),
    };
  });

  useEffect(() => {
    animation.value = { width: `${props.data.completedPercent()}%` };
  });

  return (
    <View style={styles.card}>
      <Text style={styles.taskHeader}>
        {props.data.categoryTasks.length} Tasks
      </Text>
      <Text style={styles.categoryNameHeader}>{props.data.name}</Text>
      <View style={styles.barBackground}>
        <Animated.View
          style={[
            {
              height: "100%",
              backgroundColor: props.data.color,
            },
            animationStyle,
          ]}
        ></Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.CARD_BACKGROUND_COLOR,
    width: 200,
    padding: 25,
    borderRadius: 30,
    paddingTop: 26,
    alignContent: "flex-start",
    justifyContent: "center",
    margin: 10,
    elevation: 2,
    shadowColor: "#F5F5FD",
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  barBackground: {
    width: "100%",
    backgroundColor: COLORS.BAR_BACKGROUND,
    height: 4,
    borderRadius: 5,
    overflow: "hidden",
  },
  taskHeader: {
    color: COLORS.ICONS_COLOR,
    fontFamily: "Roboto_300Light",
    paddingBottom: 11,
    fontSize: 15,
  },
  categoryNameHeader: {
    color: COLORS.TEXT_COLOR_SECONDARY,
    fontSize: 23,
    fontFamily: "Roboto_500Medium",
    paddingBottom: 20,
  },
});

export default CategoryItem;
