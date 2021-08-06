import React from "react";
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../constants/COLORS";

const AddTaskScreen = (props) => {
  const { visible, closeModalHandler } = props;

  return (
    <Modal
      visible={visible}
      presentationStyle={"overFullScreen"}
      animationType={"slide"}
    >
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity
            onPress={() => {
              closeModalHandler();
            }}
          >
            <View style={styles.closeButton}>
              <MaterialCommunityIcons
                name={"close"}
                size={30}
                color={COLORS.BACKGROUND_COLOR_SECONDARY}
              />
            </View>
          </TouchableOpacity>
        </View>

        <TextInput
          defaultValue={"Enter New Task"}
          style={{ color: COLORS.ICONS_COLOR, fontSize: 25 }}
        ></TextInput>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row-reverse",
  },
  container: { marginHorizontal: 10 },
  closeButton: {
    padding: 10,
    marginTop: 40,
    marginRight: 20,
    borderColor: COLORS.ICONS_COLOR,
    borderWidth: 1.5,
    borderRadius: 200,
  },
});

export default AddTaskScreen;
