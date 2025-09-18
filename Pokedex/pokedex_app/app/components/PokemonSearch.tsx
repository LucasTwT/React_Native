import { styles } from "@/assets/styles/styles";
import { View, Text, TextInput } from "react-native";

export function PokemonSearch ({setPokemonName} : {setPokemonName:  React.Dispatch<React.SetStateAction<string>>}) {
    return (
        <View style={styles.searchContainer}>
            <Text style={styles.searchLabel}>Introduce el nombre del pokémon</Text>
            <TextInput style={styles.searchInput} placeholder="Introduce the pokemon name" onChangeText={setPokemonName}></TextInput>
        </View>
    )
}