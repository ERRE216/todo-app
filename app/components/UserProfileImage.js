import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";

import COLORS from "../constants/COLORS";

export default function UserProfileImage(props) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 0.5,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>
      <View style={styles.outline}>
        <View style={styles.userProfileContainer}>
          <Image
            style={styles.userProfileImage}
            source={image ? { uri: image } : require("../../assets/user.png")}
          />
        </View>
      </View>
      <View style={styles.cameraButton}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name={"camera"}
            color={COLORS.BACKGROUND_COLOR_MAIN}
            size={30}
            onPress={pickImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outline: {
    borderColor: "lightgrey",
    borderWidth: 2,
    borderRadius: 125,
    padding: 3,
  },
  userProfileContainer: {
    borderRadius: 150,
    overflow: "hidden",
    width: 125,
    height: 125,
  },
  userProfileImage: { width: "100%", height: "100%", resizeMode: "cover" },
  cameraButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.ICONS_COLOR,
    borderRadius: 45,
    padding: 10,
  },
});
