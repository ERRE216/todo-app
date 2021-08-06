import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useIsDrawerOpen } from "@react-navigation/drawer";

import { WIDTH, HEIGHT } from "../constants/DIMENSIONS";

const ANIMATIONS = {};

ANIMATIONS.SCREEN_ANIMATION = () => {
  const ANIMATION_DURATION = 300;
  const isDrawerOpen = useIsDrawerOpen();

  //Defines the values to use for the animations
  const animation = useSharedValue({
    height: HEIGHT,
    borderRadius: 0,
    marginVertical: 0,
  });

  useEffect(() => {
    if (isDrawerOpen) {
      animation.value = {
        height: HEIGHT * 0.9,
        marginVertical: (HEIGHT * 0.1) / 2,
        borderRadius: 30,
      };
    }
    if (!isDrawerOpen) {
      animation.value = {
        height: HEIGHT,
        marginVertical: 0,
        borderRadius: 0,
      };
    }
  }, [isDrawerOpen]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(animation.value.heigth, {
        duration: ANIMATION_DURATION,
      }),
      marginVertical: withTiming(animation.value.marginVertical, {
        duration: ANIMATION_DURATION,
      }),
      borderRadius: withTiming(animation.value.borderRadius, {
        duration: ANIMATION_DURATION,
      }),
    };
  });

  return animatedStyles;
};

ANIMATIONS.FLOATING_BUTTON_ANIMATION = () => {
  //Defines the values to use for the animations
  const position = useSharedValue({
    x: 50,
    y: 50,
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = position.value.x;
      context.startY = position.value.y;
    },
    onActive: (event, context) => {
      position.value.x = context.startX + event.translationX;
      position.value.y = context.startY + event.translationY;
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: position.value.x },
        { translateY: position.value.y },
      ],
    };
  });

  return { animatedStyles, gestureHandler };
};

export default ANIMATIONS;
