import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import NetInfo from "@react-native-community/netinfo";

import MessageList from "./components/MessageList";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener((state) => {
      // console.log("Connection type", state.type);
      // console.log("Is connected?", state.isConnected);
      setConnected(state.isConnected);
    });

    // Unsubscribe (clean up func)
    return () => unsubscribe();
  }, []);

  const textInputHandler = (msg) => {
    setMessage(msg);
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  const submitHandler = () => {
    if (message.trim().length == 0) {
      return;
    }
    setMessage("");
    setMessages((prevMessages) => [
      { id: new Date().toString(), type: "text", message: message },
      ...prevMessages,
    ]);
  };

  return (
    <View style={styles.screen}>
      <MessageList data={messages} deleteMessage={deleteMessage} />
      <View style={styles.sendMessageContainer}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            setMessages((prevMessages) => [
              {
                type: "image",
                uri:
                  "https://static.bangkokpost.com/media/content/20200813/c1_1967767.jpg",
              },
              ...prevMessages,
            ]);
          }}
        >
          <MaterialIcons name="camera-alt" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <MaterialIcons name="map" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type Something!"
            onChangeText={textInputHandler}
            onSubmitEditing={submitHandler}
            value={message}
          />
        </View>
      </View>
      <StatusBar style="auto" backgroundColor={!connected && "red"} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingTop: 25,
  },
  sendMessageContainer: {
    paddingTop: 15,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInputContainer: {
    flex: 5,
    paddingRight: 15,
  },
  textInput: {
    color: "black",
    backgroundColor: "#eee",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
});
