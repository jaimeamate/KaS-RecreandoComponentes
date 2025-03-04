import { StyleSheet } from "react-native";

export const columnStyles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    maxWidth: 300,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#101204",
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 12,
  },

  title: {
    paddingLeft: 10,
    marginVertical: 6,
    textTransform: "capitalize",
  },
});

export const cardStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    padding: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#22272b",
  },
});

export const creatorStyles = StyleSheet.create({
  container: {
    // padding: 10,
  },

  addBtn: {
    padding: 10,
    borderRadius: 10,
  },

  addBtnHover: {
    backgroundColor: "#22272b",
  },

  input: {
    padding: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 10,
    color: "white",
    backgroundColor: "#22272b",
    borderColor: "#579dff",
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginTop: 10,
  },

  createBtn: {
    backgroundColor: "#579dff",
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
});

export const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },

  icon: {
    width: 24,
    height: 24,
  },
});
