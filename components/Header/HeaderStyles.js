import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    shadowColor: "#000",
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
  },
  icon: {
    paddingHorizontal: 10,
  },
  profile: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    borderRadius: 50,
  },
  info: {
    flexDirection: "column",
    paddingLeft: 15,
  },
  backIcon: {
    height: 32,
    width: 32,
  },
  text: {
    fontSize: 18,
    fontWeight: "800",
    color: "#000",
  },
  subText: {
    fontSize: 12,
    color: "#9b9a9a",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

export default styles;
