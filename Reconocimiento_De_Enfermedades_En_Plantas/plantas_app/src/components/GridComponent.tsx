import { FlatList, ImageBackground, ScrollViewComponent, View } from "react-native";
import { GridElement } from "./GridElement";
import { DataGridElement } from "../types/types";
import { styles } from "../styles/styles";

export function GridComponent ({ data } : {data: DataGridElement[]}) {
   
    return (
            <ImageBackground source={require('@/assets/images/background-Stars.png')} resizeMode="cover" style={{padding: 20, flex: 1}}>
                <FlatList 
                style={{flex: 1, width: '100%'}}
                data={data}
                numColumns={2}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{alignItems: 'center'}}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{gap: 20}}
                renderItem={({item}) => (
                    <GridElement title={item.title} def={item.def} img_path={item.img}></GridElement>
                )}
                
                >
                </FlatList>
            </ImageBackground>
    )
}