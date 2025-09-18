import { Text, View, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import { styles } from "@/assets/styles/styles";
import { PokemonSearch } from "@/components/PokemonSearch";
import { useState } from "react";
import { usePokemon } from "../services/usePokemon";
import { Pokemon } from "@/components/Pokemon";
import { NotFound } from "@/components/NotFound";

export  default function Home() {
  const [pokemonName, setPokemonName] = useState('')
  const { pokemon } = usePokemon({ pokemonName: pokemonName })
  return (
    <View style={styles.appContainer}>
        <View style={styles.headerContainer}>
          <Image style={styles.headerImage} source={require("@/assets/images/unown.png")} />
          <Text style={styles.titleText}>Pokémon finder</Text>
        </View>
        <PokemonSearch setPokemonName={setPokemonName}></PokemonSearch>
        {
          pokemon ?
            <Pokemon pokemon={pokemon}></Pokemon> : <NotFound></NotFound>
        }
      </View>
  )
}