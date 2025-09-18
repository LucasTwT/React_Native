import { Text, View } from "react-native";
import { styles } from "@/assets/styles/styles";
import { PokemonSearch } from "../components/PokemonSearch";
import { useState } from "react";
import { usePokemon } from "../services/usePokemon";
import { Pokemon } from "../components/Pokemon";
import { Link } from "expo-router";

export default function Home () {
    const [pokemonName, setPokemonName] = useState('')
    const { pokemon } = usePokemon({ pokemonName: pokemonName})
    return (
    <View style={styles.appContainer}>
      <Text style={styles.titleText}>Pokémon finder</Text>
      <PokemonSearch setPokemonName={setPokemonName}></PokemonSearch>
      <Link style={styles.linkContainer} href={'/(tabs)/Favorites'}><Text style={styles.textLink}>Go to favorite list</Text></Link>
      {
        pokemon  ? 
        <Pokemon pokemon={pokemon}></Pokemon>  : <Text style={styles.pokemonText}>sin resultados</Text>
      }
    </View>
    )
}