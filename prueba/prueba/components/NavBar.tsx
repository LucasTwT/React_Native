import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export  function NavBar() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "(tabs)/index") {
            iconName = focused ? "search" : "search-outline";
            
          } else if (route.name === "(tabs)/Favorites") {
            iconName = focused ? "save" : "save-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#222",
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="Favorites" options={{ title: "Favorites" }} />
    </Tabs>
  );
}
