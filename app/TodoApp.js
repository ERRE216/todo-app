import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import DrawerNavigator from "./components/DrawerNavigation";

import { HomeScreen, EmptyScreen } from "./screens/Screens.js";

import COLOR from "./constants/COLORS";
import { WIDTH, HEIGHT } from "./constants/DIMENSIONS";

import { GlobalProvider } from "./context/GlobalContext";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Application() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='Home'
          drawerType={"slide"}
          drawerContent={(props) => <DrawerNavigator {...props} />}
          overlayColor={"transparent"}
          sceneContainerStyle={{
            backgroundColor: COLOR.BACKGROUND_COLOR_SECONDARY,
          }}
          edgeWidth={0}
          drawerStyle={{ width: WIDTH * 0.8 }}
        >
          <Drawer.Screen
            name='Home'
            component={HomeScreen}
            options={{
              drawerIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons
                  name={focused ? "home" : "home-outline"}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name='Templates'
            component={EmptyScreen}
            options={{
              drawerIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons
                  name={focused ? "bookmark" : "bookmark-outline"}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name='Analytics'
            component={EmptyScreen}
            options={{
              drawerIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons
                  name={focused ? "chart-pie" : "chart-donut"}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name='Categories'
            component={EmptyScreen}
            options={{
              drawerIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons
                  name={focused ? "checkerboard" : "checkerboard"}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name='Settings'
            component={EmptyScreen}
            options={{
              drawerIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons
                  name={focused ? "cog" : "cog-outline"}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}
