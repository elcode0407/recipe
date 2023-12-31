import { View, Text, StyleSheet } from "react-native";
function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.di, textStyle]}>{duration}m</Text>
      <Text style={[styles.di, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.di, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  di: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
});
