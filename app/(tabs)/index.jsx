import style from "../../styles/home-css";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { useRef, useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Ionicons } from '@expo/vector-icons';

/**
 * This is the HomeScreen component for a React Native application.
 * It allows users to take pictures using the camera and display them in a gallery.
 * The component manages the camera view, permission handling, and the gallery of captured images.
 */
export default function HomeScreen() {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const camera = useRef(null);
  const [Gallery, setGallery] = useState([]);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={style.container}>
        <Text style={style.message}>
          We need your permission to show the camera
        </Text>
        <TouchableOpacity onPress={requestPermission} style={style.button}>
          <Text style={style.text}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function takePicture() {
    const picture = await camera.current.takePictureAsync();
    setGallery([...Gallery, picture]);
  }

  const dltPicture = async (id) => {
    const newGallery = [...Gallery];
    await newGallery.splice(id, 1);
    setGallery(newGallery);
    Alert.alert("Picture removed successfully");
  };

  return (
    <>
      <View style={style.titlecontainer}>
        <Text style={style.title}>Zynap</Text>
        <Text style={style.subtitle}>Created by Umer Saleem</Text>
      </View>

      <View style={style.cameraContainer}>
        <CameraView style={style.camera} facing={facing} ref={camera}>
          <View style={style.cameraContainer}>
            <TouchableOpacity onPress={toggleCameraFacing} style={style.iconButton}>
              <Ionicons name="camera-reverse" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </CameraView>
      </View>

      <View style={style.buttonContainer}>
        <TouchableOpacity onPress={takePicture} style={style.iconButton}>
          <Ionicons name="camera" size={40} color="white" />
        </TouchableOpacity>

        <ScrollView horizontal showsHorizontalScrollIndicator={true} style={{ paddingVertical: 10 }}>
          {Gallery.map((img, index) => (
            <View key={index} style={{ position: "relative", marginRight: 10 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#fa1919",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  zIndex: 50,
                  width: 20,
                  height: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
                onPress={() => dltPicture(index)}
              >
                <Text style={{ color: "white", fontSize: 12 }}>x</Text>
              </TouchableOpacity>

              <Image source={{ uri: img.uri }} style={{ width: 100, height: 100 }} />
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
