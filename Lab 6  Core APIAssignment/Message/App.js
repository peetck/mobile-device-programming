import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";

import Status from "./components/Status";
import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";

export default function App() {
  const [messages, setMessages] = useState([]);

  const addMessageHandler = (messageData) => {
    setMessages((prevMessages) => [messageData, ...prevMessages]);
  };

  const deleteMessageHandler = (id) => {
    Alert.alert(
      "Delete message?",
      "Are you sure you want to permanently delete this message?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => {
            setMessages((prevMessages) =>
              prevMessages.filter((message) => message.id !== id)
            );
          },
        },
      ]
    );
  };

  const renderMessageList = () => {
    return (
      <View style={styles.content}>
        <MessageList
          messages={messages}
          onPressMessage={deleteMessageHandler}
        />
      </View>
    );
  };

  const renderInputMethodEditor = () => {
    return <View style={styles.inputMethodEditor}></View>;
  };

  const renderToolbar = () => {
    return (
      <View style={styles.toolbar}>
        <MessageInput
          onSubmit={addMessageHandler}
          onPressMessage={deleteMessageHandler}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Status />
      {renderMessageList()}
      {renderToolbar()}
      {/* {renderInputMethodEditor()} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    backgroundColor: "white",
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: "white",
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.04)",
    backgroundColor: "white",
  },
});
