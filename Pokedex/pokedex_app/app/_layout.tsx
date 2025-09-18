import { SafeAreaView } from "react-native-safe-area-context";
import { PokemonFavorite } from "./context/pokemon";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <PokemonFavorite>
      <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <Slot />
      </SafeAreaView>
    </PokemonFavorite>
  );
}
