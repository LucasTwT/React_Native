import { View, Text } from "react-native";
import { styles } from "../styles/styles";
import { globalStyles } from "@/assets/styles/globalStyles";

export function Card ({title, content} : {title: string, content: string}) {
    return (
        <View style={styles.cardContainer}>
            <Text style={globalStyles.secondaryTitle}>{title}</Text>
            <Text style={globalStyles.descriptionText}>{content}</Text>
        </View>
    )
}