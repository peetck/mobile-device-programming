import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const MyButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: props.color ? props.color : "#1E2326",
      }}
      onPress={() => {
        props.onTap(props.label);
      }}
    >
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -1,
  },
  label: {
    fontSize: 30,
    color: "white",
  },
});

export default MyButton;
