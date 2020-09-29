import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

const MessageList = (props) => {
  const deleteMessageHandler = (id) => {
    Alert.alert(
      "Delete message?",
      "Are you sure you want to permanently delete this message?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => props.deleteMessage(id),
        },
      ]
    );
  };

  const createMessageItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.messageItem}
        key={itemData.item}
        onLongPress={() => deleteMessageHandler(itemData.item.id)}
      >
        {itemData.item.type === "text" ? (
          <Text style={styles.message}>{itemData.item.message}</Text>
        ) : (
          <Image style={styles.image} source={{ uri: itemData.item.uri }} />
        )}
      </TouchableOpacity>
    );
  };

  return <FlatList data={props.data} renderItem={createMessageItem} inverted />;
};

const styles = StyleSheet.create({
  messageItem: {
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 10,
  },
  message: {
    color: "white",
    backgroundColor: "#0084FF",
    padding: 10,
    borderRadius: 50,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default MessageList;
