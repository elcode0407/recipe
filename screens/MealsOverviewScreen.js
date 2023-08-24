import { StyleSheet, View, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/mealsList/MealsList";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/contextf";
function MealsOverviewScreen({ route }) {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const mealIsFavorite = favoriteMealsCtx.ids;
  const navigation = useNavigation();
  const id = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(id) >= 0;
  });
  useLayoutEffect(() => {
    const category = CATEGORIES.find((category) => category.id === id).title;
    navigation.setOptions({
      title: category,
    });
  }, [id, navigation]);

  return <MealsList items={displayedMeals} ids={mealIsFavorite} />;
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
