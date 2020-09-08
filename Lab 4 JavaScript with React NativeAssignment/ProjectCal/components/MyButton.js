import React from "react";
import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native";

const MyButton = (props) => {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        props.onTap(props.label);
      }}
    >
      <View
        style={{
          ...styles.button,
          backgroundColor: props.color ? props.color : "#1E2326",
        }}
      >
        <Text style={styles.label}>{props.label}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 30,
    color: "white",
  },
});

export default MyButton;
