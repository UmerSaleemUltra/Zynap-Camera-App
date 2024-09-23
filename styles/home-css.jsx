import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  titlecontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "red",
    // borderWidth: 2,
  },
  cameraContainer: {
    flex: 2, // Camera takes up most of the space
    alignItems: "flex-start",
    justifyContent: "flex-end",
    width: "100%",
    // borderColor: "red",
    // borderWidth: 2,
    marginBottom: 10,
    borderRadius: 20,
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  cameraControlContainer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    // borderColor: "red",
    // borderWidth: 2,
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 180,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default styles;
