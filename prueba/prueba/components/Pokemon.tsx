import { styles } from "@/assets/styles/styles"
import type { DataPokemon, StyleButton } from "../app/types.d";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { PokemonFavoriteContext } from "../app/context/pokemon";
export function Pokemon({ pokemon } : { pokemon: DataPokemon }) {
    const { state, removePokemon, addPokemon } = useContext(PokemonFavoriteContext)
    const { savedPokemon } = state
    return (
        <View style={styles.pokemonContainer}>
            <Text style={styles.pokemonText}>Name: {pokemon.name}</Text>
            <Text style={styles.pokemonText}>Type of {pokemon.name}: {pokemon.pokemonType}</Text>
            <Text style={styles.pokemonText}>Weight of {pokemon.name}: {pokemon.weight}</Text>
            <View style={styles.pokemonAbilitiesContainer}>
                {pokemon.abilities.map((ability, index) => {
                    return (
                        <Text key={index} style={styles.pokemonText}>{ability}</Text>
                    )
                })}
            </View>
            {
            savedPokemon.some((listPokemon: DataPokemon) => listPokemon.name === pokemon.name) 
            ? 
            <TouchableOpacity style={styles.pokemonButtonRemoveFavorite} onPress={() => removePokemon(pokemon)}>
                <Text style={styles.pokemonText}>Remove pokemon</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.pokemonButtonAddFavorite} onPress={() => addPokemon(pokemon)}>
                <Text style={styles.pokemonText}>Add pokemon to the favourite list</Text>
            </TouchableOpacity>
            }<ScrollView contentContainerStyle={styles.pokemonScrollView} horizontal>
                {pokemon.imgs.map((url, index) => {
                    return (
                        <View key={index} style={{ width: 'auto', height: 'auto' }}>
                            <Image source={{ uri: url }} style={styles.pokemonImgs}></Image>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}