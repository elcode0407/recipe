import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";
function MealsList({ items, ids }) {
  const navigation = useNavigation();
  function renderMI(itemData) {
    const item = itemData.item;

    const miProps = {
      id: item.id,
      ids: ids,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      navigation: navigation,
    };
    return <MealItem {...miProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMI}
      />
    </View>
  );
}
export default MealsList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
