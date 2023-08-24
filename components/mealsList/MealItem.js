import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";
import MealDetails from "../mealDetails";
import { useNavigation } from "@react-navigation/native";
function MealItem({
  id,
  ids,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  function miPress() {
    navigation.navigate("DetailsScreen", {
      mealId: id,
      favoriteId: ids,
    });
  }
  return (
    <View style={styles.mi}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.btnPressed : null)}
        onPress={miPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mi: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderColor: "white",
  },

  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17,
    margin: 6,
  },

  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  btnPressed: {
    opacity: Platform.OS === "android" ? 1 : 0.5,
  },
});
