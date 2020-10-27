import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";

const FavoritesScreen = (props) => {
  // const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  return (
    <View style={styles.screen}>
      <MealList listData={favMeals} navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

export default FavoritesScreen;
