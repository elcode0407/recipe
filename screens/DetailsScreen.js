import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/mealDetails";
import IconButton from "../components/IconButton";
import { useNavigation } from "@react-navigation/native";
import { FavoritesContext } from "../store/context/contextf";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
function DetailsScreen({ route }) {
  const navigation = useNavigation();
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const dispatch = useDispatch();

  const id = route.params.mealId;
  const mealItem = MEALS.find((meal) => meal.id === id);

  const mealIsFavorite = favoriteMealIds.includes(id);

  console.log(mealIsFavorite);

  function headerPressHandler() {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(id);
      dispatch(removeFavorite({ id: id }));
    } else {
      // favoriteMealsCtx.addFavorite(id);
      dispatch(addFavorite({ id: id }));
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealItem.title,
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color={"white"}
            onPress={headerPressHandler}
          />
        );
      },
    });
  }, [navigation, mealIsFavorite]);
  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: mealItem.imageUrl }} style={styles.image} />
      <MealDetails
        duration={mealItem.duration}
        complexity={mealItem.complexity}
        affordability={mealItem.affordability}
        style={{ width: "100%" }}
        textStyle={styles.dStyle}
      />
      <View style={styles.listOuterConatiner}>
        <View style={styles.listConatiner}>
          <View style={styles.sContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          <View style={styles.list}>
            {mealItem.ingredients.map((ingredient) => (
              <Text style={styles.listText} key={ingredient}>
                {ingredient}
              </Text>
            ))}
          </View>

          <View style={styles.sContainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>
          <View style={styles.list}>
            {mealItem.steps.map((steps) => (
              <Text style={styles.listText} key={steps}>
                {steps}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  root: {
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#e0573f",
  },
  sContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: "#e0573f",
    borderBottomWidth: 2,
  },
  list: {
    marginHorizontal: 22,
    marginVertical: 10,
  },
  listText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 4,
    backgroundColor: "#fbf1f1",
    padding: 10,
    borderRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  dStyle: {
    fontSize: 20,
    width: "auto",
    marginHorizontal: 10,
    textAlign: "center",
  },
  listConatiner: {
    width: "90%",
  },
  listOuterConatiner: {
    alignItems: "center",
  },
});
