import { globalStyles } from "@/assets/styles/globalStyles";
import { Card } from "@/src/components/CardComponent";
import { GridComponent } from "@/src/components/GridComponent";
import { DataGridElement } from "@/src/types/types";
import { Text, View } from "react-native";

export default function Index() {

  const tecnologies: DataGridElement[] = [
    {id: "1", title: "React native", def: '[Frontend]', img: require('@/assets/images/React-icon.png')},
    {id: "2", title: "Expo", def: '[Frontend]', img: require('@/assets/images/expo-icon.png')},
    {id: "3", title: "TypeScript", def: '[Frontend]', img: require('@/assets/images/typescript-def.png')},
    {id: "4", title: "Python", def: '[Backend]', img: require('@/assets/images/Python-icon.png')},
    {id: "5", title: "FastAPI", def: '[Backend]', img: require('@/assets/images/fastapi-icon.webp')},
    {id: "6", title: "Docker", def: '[Backend]', img: require('@/assets/images/docker-icon.webp')},
    {id: "7", title: "PyTorch", def: '[Backend]', img: require('@/assets/images/pytorch-icon.png')},
  ]

  return (
    <View style={globalStyles.pageContainer}>
      <View >
        <Text style={globalStyles.primaryTitle}>Proyecto React native:</Text>
        <Text style={globalStyles.definitionText}>[React native + Python]</Text>
      </View>
      <Card title="Objetivos del proyecto:" content="Crear una App para que los usuarios puedan obtener un análisis con fotos de sus plantas para saber su estado actual"/>
      <View style={{flex: 1, gap:10}}>
        <Text style={globalStyles.secondaryTitle}>Tecnologías usadas en la app: </Text>
        <GridComponent data={tecnologies}></GridComponent>
      </View>
    </View>
  );
}
