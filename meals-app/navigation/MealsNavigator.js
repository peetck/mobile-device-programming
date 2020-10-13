// import คอมโพเนนต์ที่จำเป็น
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator(
  {
    // กำหนด RouteConfigs (Slide 14)
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#4a148c",
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(MealsNavigator);
