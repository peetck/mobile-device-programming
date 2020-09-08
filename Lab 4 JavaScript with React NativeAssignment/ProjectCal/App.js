import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import MyButton from "./components/MyButton";

export default function App() {
  const [expressionText, setExpressionText] = useState("");
  const [resultText, setResultText] = useState("");

  const buttonPressHandler = (text) => {
    switch (text) {
      case "=":
        try {
          setResultText(eval(expressionText));
        } catch (err) {
          setResultText("Bad expression");
        }
        break;
      case "DEL":
        setExpressionText((prevExpressionText) =>
          prevExpressionText.substring(0, prevExpressionText.length - 1)
        );
        break;
      default:
        setExpressionText((prevExpressionText) => prevExpressionText + text);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.displayContainer}>
        <Text style={styles.expressionText}>{expressionText}</Text>
      </View>
      <View style={styles.displayContainer}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonColumn}>
          <MyButton label="1" onTap={buttonPressHandler} />
          <MyButton label="4" onTap={buttonPressHandler} />
          <MyButton label="7" onTap={buttonPressHandler} />
          <MyButton label="." onTap={buttonPressHandler} />
        </View>
        <View style={styles.buttonColumn}>
          <MyButton label="2" onTap={buttonPressHandler} />
          <MyButton label="5" onTap={buttonPressHandler} />
          <MyButton label="8" onTap={buttonPressHandler} />
          <MyButton label="0" onTap={buttonPressHandler} />
        </View>
        <View style={styles.buttonColumn}>
          <MyButton label="3" onTap={buttonPressHandler} />
          <MyButton label="6" onTap={buttonPressHandler} />
          <MyButton label="9" onTap={buttonPressHandler} />
          <MyButton label="=" onTap={buttonPressHandler} />
        </View>
        <View style={styles.buttonColumn}>
          <MyButton label="DEL" color="#444D54" onTap={buttonPressHandler} />
          <MyButton label="+" color="#444D54" onTap={buttonPressHandler} />
          <MyButton label="-" color="#444D54" onTap={buttonPressHandler} />
          <MyButton label="*" color="#444D54" onTap={buttonPressHandler} />
          <MyButton label="/" color="#444D54" onTap={buttonPressHandler} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  displayContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonContainer: {
    flex: 4,
    flexDirection: "row",
  },
  buttonColumn: {
    flex: 1,
  },
  expressionText: {
    fontSize: 25,
    paddingHorizontal: 10,
  },
  resultText: {
    fontSize: 35,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});
