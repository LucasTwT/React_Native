import { ScrollView, Text, View } from "react-native";
import { styles } from "@/assets/styles/styles";
import { useContext, useEffect } from "react";
import { PokemonFavoriteContext } from "../context/pokemon";
import { Pokemon } from "../components/Pokemon";
import { Link } from "expo-router";
import Filter from "../components/Filter";
import { DataPokemon } from "../types.d";


export default function Favorites() {
    const { state, refreshFilterOptions} = useContext(PokemonFavoriteContext)
    const { savedPokemon, filterSelected } = state
    useEffect(() => {
        refreshFilterOptions()
    }, [state.savedPokemon])

    const pokemonList = filterSelected == '' ? savedPokemon : savedPokemon.filter((pokemon: DataPokemon) => pokemon.pokemonType == filterSelected)
    

    return (
        <View style={styles.appContainer}>
        <Text style={styles.titleText}>List of favorite pokemons</Text>
        <Link style={styles.linkContainer} href={'/'}><Text style={styles.textLink}>Go to home</Text></Link>
        <Filter></Filter>
        <ScrollView>
        {
            pokemonList.length > 0 ? pokemonList.map((pokemon) => {
                return (
                    <Pokemon key={pokemon.name} pokemon={pokemon}></Pokemon>
                )
            }) : <Text style={styles.pokemonText}>No hay pokemons guardados</Text>
        }
        </ScrollView>
        </View>
    
  );
}
