import React, { useEffect, useCallback } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import CustomHeaderButton from "../components/CustomHeaderButton";
import { toggleFavorite } from "../store/actions/mealsAction";

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const dispatch = useDispatch();
  const mealId = props.navigation.getParam("id");
  const selectedMeal = useSelector((state) => state.meals.filteredMeals);
  const currentMealIsFav = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );
  const meal = selectedMeal.find((meal) => meal.id === mealId);

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFav });
  }, [currentMealIsFav]);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.mealItem}>
          <View>
            <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
              <ImageBackground
                source={{ uri: meal.imageUrl }}
                style={styles.bgImage}
              />
            </View>
            <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
              <Text>{meal.duration}m</Text>
              <Text>{meal.complexity.toUpperCase()}</Text>
              <Text>{meal.affordability.toUpperCase()}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.title}>Ingredients</Text>
        <View style={styles.mapContainer}>
          {meal.ingredients.map((ingredient) => (
            <Text style={styles.text} key={ingredient}>
              {ingredient}
            </Text>
          ))}
        </View>

        <Text style={styles.title}>Steps</Text>
        <View style={styles.mapContainer}>
          {meal.steps.map((step) => (
            <Text style={styles.text} key={step}>
              {step}
            </Text>
          ))}
        </View>

        <Button
          title="Go Back to Categories"
          onPress={() => {
            // เขียนโค้ดเพิ่ม
            props.navigation.navigate("Categories");
          }}
        />
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // เขียนโค้ดเพิ่มเพื่อแสดงชื่อเมนูอาหารที่เลือกให้เป็นเฮดเดอร์
  // const id = navigationData.navigation.getParam("id");
  // const meal = MEALS.find((meal) => meal.id === id);

  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFav");
  return {
    headerTitle: navigationData.navigation.getParam("mealTitle"),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 0,
    overflow: "hidden",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 18,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  mapContainer: {
    alignSelf: "flex-start",
  },
  text: {
    marginVertical: 5,
    marginHorizontal: 15,
  },
});

export default MealDetailScreen;
