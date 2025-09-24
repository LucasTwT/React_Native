import { Button, View, Text } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";

export default function Scanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false);

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View>
        <Text>Necesitas dar permiso a la cámara</Text>
        <Button onPress={requestPermission} title="Dar permiso" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {showCamera ? (
        <CameraView style={{ flex: 1 }} facing="back" />
      ) : (
        <Button title="Abrir cámara" onPress={() => setShowCamera(true)} />
      )}
    </View>
  );
}
