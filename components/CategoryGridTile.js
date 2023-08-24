import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: color - 1 }}
        style={({ pressed }) => [
          styles.btnStyle,
          pressed ? styles.btnPressed : null,
          { backgroundColor: color },
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer]}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  btnStyle: {
    flex: 1,
  },
  btnPressed: {
    opacity: Platform.OS === "android" ? 1 : 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignContent: "center",
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
