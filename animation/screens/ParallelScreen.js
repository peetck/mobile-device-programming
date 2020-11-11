import React, { useRef } from "react";
import { Animated, View, Button, StyleSheet, Easing } from "react-native";

const ParallelScreen = (props) => {
  const animatedValue = useRef(new Animated.Value(0.5)).current;
  const animatedValue2 = useRef(new Animated.Value(0)).current;
  const animatedValue3 = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.parallel([
      Animated.spring(animatedValue, {
        toValue: 1,
        friction: 1,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue2, {
        toValue: 1,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue3, {
        toValue: 1,
        duration: 5000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start(() => {
      animatedValue.setValue(0.5);
      animatedValue2.setValue(0);
      animatedValue3.setValue(0);
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <Animated.Image
          source={require("../assets/it_logo.png")}
          style={[
            {
              ...styles.logo,
              transform: [{ scale: animatedValue }],
            },
          ]}
        />
        <Animated.Text
          style={{
            ...styles.text,
            opacity: animatedValue2,
            transform: [
              {
                translateX: animatedValue3.interpolate({
                  inputRange: [0, 0.25, 0.5, 0.75, 1],
                  outputRange: [-40, 0, 40, 0, -40],
                }),
              },
            ],
          }}
        >
          Welcome to Faculty of IT!!
        </Animated.Text>
      </View>
      <Button title="Parallel" onPress={animate} />
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
  text: {
    fontSize: 15,
    color: "orange",
  },
});

export default ParallelScreen;
