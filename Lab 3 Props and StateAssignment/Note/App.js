import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const inputMessageHandler = (value) => {
    setInputMessage(value);
  };

  const addMessageHandler = () => {
    if (inputMessage.trim().length === 0) {
      return;
    }
    setMessages((prevMessages) =>
      prevMessages.concat({
        id: new Date().toString() + inputMessage,
        text: inputMessage.trim(),
      })
    );
    setInputMessage("");
  };

  const deleteMessageHandler = (id) => {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== id)
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.note}>
        <Text style={styles.titleText}>สมุดบันทึก</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={inputMessageHandler}
          value={inputMessage}
          placeholder="เพิ่มข้อความที่นี้"
        />
        <Button title="บันทึก" onPress={addMessageHandler} />
        <View style={styles.messages}>
          {messages.length !== 0 ? (
            <FlatList
              data={messages}
              renderItem={(itemData) => (
                <TouchableOpacity
                  onPress={() => deleteMessageHandler(itemData.item.id)}
                >
                  <Text style={styles.message}>{itemData.item.text}</Text>
                </TouchableOpacity>
              )}
            />
          ) : (
            <View style={styles.noMessageContainer}>
              <Text>No message found! start adding some?</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require("./assets/logo.png")} style={styles.logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
    justifyContent: "space-between",
  },
  note: { flex: 1 },
  titleText: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 15,
  },
  textInput: {
    borderColor: "red",
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: "center",
  },
  logoContainer: { alignSelf: "flex-end" },
  logo: { width: 50, height: 50 },
  messages: { marginTop: 20, flex: 1 },
  message: {
    margin: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    fontSize: 16,
  },
  noMessageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
