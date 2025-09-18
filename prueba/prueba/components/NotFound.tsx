import { View, Text, Image } from "react-native";
import { styles } from "@/assets/styles/styles";

export function NotFound () {
    return (
        <View style={styles.notFoundContainer}>
            <Image style={styles.notFoundImage} source={require('@/assets/images/IMG_NotFound.png')}/>
            <Text style={[styles.pokemonText, {'textAlign': 'center'}]}>sin resultados</Text>
        </View>
    )
}