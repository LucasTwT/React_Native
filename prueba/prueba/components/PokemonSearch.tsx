import { styles } from "@/assets/styles/styles";
import { View, Text, TextInput } from "react-native";

export function PokemonSearch ({setPokemonName} : {setPokemonName:  React.Dispatch<React.SetStateAction<string>>}) {
    return (
        <View style={styles.searchContainer}>
            <Text style={styles.searchLabel}>Pokemon name:</Text>
            <TextInput style={styles.searchInput} selectionColor={'red'} placeholder="Enter the pokemon name" onChangeText={setPokemonName}></TextInput>
        </View>
    )
}