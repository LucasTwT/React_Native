import { SafeAreaView } from "react-native-safe-area-context";
import { PokemonFavorite } from "./context/pokemon";
import { Slot } from "expo-router";
import { NavBar } from "@/components/NavBar";

export default function RootLayout() {
  return (
    
    <PokemonFavorite>
      <SafeAreaView style={{flex: 1, backgroundColor: '#01112fff'}}>
      <NavBar />
      </SafeAreaView>
    </PokemonFavorite>
  );
}
