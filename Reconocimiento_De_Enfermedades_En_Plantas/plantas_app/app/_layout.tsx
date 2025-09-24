import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font"
import AppLoading from "expo-app-loading";

export default function RootLayout() {

  const [ fontsLoaded ] = useFonts({
    changaRegular: require("../assets/fonts/changa/Changa-Regular.ttf"),
    changaBold: require("../assets/fonts/changa/Changa-Bold.ttf"),
    dotGothicRegular: require("../assets/fonts/dotGothic16/DotGothic16-Regular.ttf"),
  })

   if (!fontsLoaded) {
    return <AppLoading />; 
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#222"}}>
      <Tabs screenOptions={({ route }) => ({
        headerShown: false,
        BarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#222",
        }
      })}/>;
    </SafeAreaView>
  )
}
