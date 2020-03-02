import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import Colors from "../constants/colors";

const MainButton = props => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback; // TouchableNativeFeedback add ripple effect to buttons (android only and only v.21 or above)
  }

  return (
    // first View and style to avoid ripple effect outside button
  <View style={styles.buttonContainer}> 
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden"
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18
  }
});

export default MainButton;
