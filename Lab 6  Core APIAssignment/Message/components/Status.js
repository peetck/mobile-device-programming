import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import { View, Text, StatusBar, StyleSheet, Platform } from "react-native";
import NetInfo from "@react-native-community/netinfo";

const statusHeight = Platform.OS === "ios" ? Constants.statusBarHeight : 0;

const Status = () => {
  const [isConnected, setIsConnected] = useState(null);

  useEffect(() => {
    const setInitialStatus = async () => {
      const status = await NetInfo.fetch();
      setIsConnected(status.isConnected);
    };

    const unSubscription = NetInfo.addEventListener((status) => {
      setIsConnected(status.isConnected);
    });

    setInitialStatus();

    // clean up function
    return () => unSubscription();
  }, []);

  const backgroundColor = isConnected ? "white" : "red";

  const messageContainer = (
    <View style={styles.messageContainer} pointerEvents={"none"}>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={isConnected ? "dark-content" : "light-content"}
        animated={false}
      />
      {!isConnected && (
        <View style={styles.bubble}>
          <Text style={styles.text}>No network connection</Text>
        </View>
      )}
    </View>
  );

  if (Platform.OS === "ios") {
    return (
      <View
        style={{
          ...styles.status,
          backgroundColor: backgroundColor,
        }}
      >
        {messageContainer}
      </View>
    );
  }

  return messageContainer;
};

const styles = StyleSheet.create({
  status: {
    zIndex: 1,
    height: statusHeight,
  },
  messageContainer: {
    zIndex: 1,
    position: "absolute",
    top: statusHeight + 20,
    right: 0,
    left: 0,
    height: 80,
    alignItems: "center",
  },
  bubble: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "red",
  },
  text: {
    color: "white",
  },
});

export default Status;
