import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  chatContainer: {
    overflow: "hidden",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    maxWidth: "80%",
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  ownerView: {
    backgroundColor: "#e3ffdf",
    marginLeft: "auto",
    borderTopLeftRadius: 16,
    justifyContent: "space-between",
  },
  nonOwnerView: {
    backgroundColor: "#fff",
    borderTopRightRadius: 16,
    justifyContent: "flex-end",
    marginRight: "auto",
  },
  messageText: {
    paddingHorizontal: 10,
    color: "#000",
    fontSize: 15,
  },
  timeText: {
    fontSize: 11,
    color: "#4e544f",
  },
});

export default styles;
