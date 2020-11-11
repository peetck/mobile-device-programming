import React, { useRef } from "react";
import { Animated, View, Button, StyleSheet, Easing } from "react-native";

const SequenceScreen = (props) => {
  const animatedValue = useRef(new Animated.Value(1)).current;
  const animatedValue2 = useRef(new Animated.Value(0)).current;

  const rotate = animatedValue2.interpolate({
    inputRange: [0, 0.25, 1],
    outputRange: ["0deg", "360deg", "0deg"],
  });

  const animate = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue2, {
        toValue: 1,
        duration: 20000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start(() => {
      animatedValue.setValue(1);
      animatedValue2.setValue(0);
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
              opacity: animatedValue,
              transform: [{ rotate: rotate }],
            },
          ]}
        />
      </View>
      <Button title="Sequence" onPress={animate} />
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

export default SequenceScreen;
