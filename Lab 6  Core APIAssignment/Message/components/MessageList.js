import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
import { MessageShape } from "../utils/MessageUtils";

const MessageList = (props) => {
  const renderItem = (itemData) => {
    if (itemData.item.type === "text") {
      return (
        <TouchableOpacity
          style={styles.messageItem}
          onLongPress={() => props.onPressMessage(itemData.item.id)}
        >
          <Text style={styles.bubble}>{itemData.item.text}</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <FlatList
      data={props.messages}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      inverted
    />
  );
};

const styles = StyleSheet.create({
  messageItem: {
    alignItems: "flex-end",
    padding: 10,
  },
  bubble: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#0084ff",
    color: "white",
    maxWidth: 200,
  },
});

MessageList.propTypes = {
  messages: PropTypes.arrayOf(MessageShape).isRequired,
  onPressMessage: PropTypes.func,
};

MessageList.defaultProps = {
  onPressMessage: () => {},
};

export default MessageList;
