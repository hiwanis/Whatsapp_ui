import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 50,
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  icon: {
    paddingHorizontal: 15,
  },
  rightIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  rotatedIcon: {
    transform: [{ rotate: "90deg" }, { scale: 1.2 }],
  },
  greenIcon: {
    margin: 8,
    borderRadius: 50,
    backgroundColor: "#38d15a",
    padding: 10,
  },
});

export default styles;
