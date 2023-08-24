import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import DetailsScreen from "./screens/DetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/contextf";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Provider store={store}>
      <Drawer.Navigator
        screenOptions={{
          headerTintColor: "#ffd5ce",
          headerStyle: { backgroundColor: "#ff8b77" },
          sceneContainerStyle: { backgroundColor: "#fbdfdb" },
          drawerContentStyle: { backgroundColor: "#ff8b77" },
          drawerInactiveTintColor: "#ffd5ce",
          drawerLabelStyle: { fontSize: 18 },
          drawerActiveTintColor: "#ff8b77",
          drawerActiveBackgroundColor: "#fbdfdb",
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ size, color }) => (
              <AntDesign name="appstore-o" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoriteScreen}
          options={{
            drawerIcon: ({ size, color }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </Provider>
  );
}
export default function App() {
  return (
    // <FavoritesContextProvider>

    <Provider store={store}>
      <>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTintColor: "#ffd5ce",
              headerStyle: { backgroundColor: "#ff8b77" },
              contentStyle: { backgroundColor: "#fbdfdb" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    </Provider>
    // </FavoritesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
