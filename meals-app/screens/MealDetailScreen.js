import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const id = props.navigation.getParam("id");
  const meal = MEALS.find((meal) => meal.id === id);

  return (
    <View style={styles.screen}>
      <Text>Dish: {meal.title}</Text>
      <Text>Steps: {meal.steps}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          // เขียนโค้ดเพิ่ม
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // เขียนโค้ดเพิ่มเพื่อแสดงชื่อเมนูอาหารที่เลือกให้เป็นเฮดเดอร์
  const id = navigationData.navigation.getParam("id");
  const meal = MEALS.find((meal) => meal.id === id);
  return {
    headerTitle: meal.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
