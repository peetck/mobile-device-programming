import React, { useRef } from "react";
import { Animated, View, Button, StyleSheet } from "react-native";

const SpringScreen = (props) => {
  const animatedValue = useRef(new Animated.Value(0.5)).current;

  const animate = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 1,
      useNativeDriver: true,
    }).start(() => {
      animatedValue.setValue(0.5);
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <Animated.Image
          source={require("../assets/it_logo.png")}
          style={[{ ...styles.logo, transform: [{ scale: animatedValue }] }]}
        />
      </View>
      <Button title="Spring" onPress={animate} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SpringScreen;
