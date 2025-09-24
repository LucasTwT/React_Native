import { globalStyles } from '@/assets/styles/globalStyles'
import { View, Image, ImageSourcePropType, Text } from 'react-native'
import { styles } from '../styles/styles'

export function GridElement ({img_path, title, def} : {img_path: ImageSourcePropType, title: string, def: string}) {
    return (
        <View style={styles.gridElementContainer}>
            <Image style={styles.griElementImg} source={img_path} resizeMode='contain'/>
            <Text style={globalStyles.secondaryTitle}>{title}</Text>
            <Text style={globalStyles.definitionText}>{def}</Text>
        </View>
    )
}