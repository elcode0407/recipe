import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/mealsList/MealsList";
import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/contextf";
import { useSelector } from "react-redux";
function FavoriteScreen() {
  // const mealsIds = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeal = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeal.length === 0) {
    return (
      <View style={styles.vStyle}>
        <Text style={styles.tStyle}>No favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeal} />;
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  vStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
