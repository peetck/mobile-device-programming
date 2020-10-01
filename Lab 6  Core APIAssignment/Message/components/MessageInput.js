import React, { useState } from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { createTextMessage } from "../utils/MessageUtils";

const MessageInput = (props) => {
  const [message, setMessage] = useState("");

  return (
    <View style={styles.inputContainer}>
      <View style={styles.icon}>
        <Ionicons
          name={Platform.OS === "android" ? "md-camera" : "ios-camera"}
          size={23}
        />
      </View>
      <View style={styles.icon}>
        <Ionicons
          name={Platform.OS === "android" ? "md-map" : "ios-map"}
          size={23}
        />
      </View>
      <View style={styles.textInput}>
        <TextInput
          placeholder="Type Something!"
          value={message}
          onChangeText={(text) => setMessage(text)}
          onSubmitEditing={() => {
            props.onSubmit(createTextMessage(message));
            setMessage("");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 5,
    backgroundColor: "#ebe8e6",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MessageInput;
