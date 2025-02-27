import { StyleSheet } from "react-native";

const MenuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F7",
    padding: 20,
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3498DB",
    padding: 20,
    borderRadius: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  profileIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#2980B9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  profileIconText: {
    fontSize: 28,
    color: "#FFF",
    fontWeight: "bold",
  },
  profileDetails: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ECF0F1",
  },
  email: {
    fontSize: 14,
    color: "#D5DBDB",
  },
  menuContainer: {
    width: "100%",
    borderRadius: 15,
    backgroundColor: "#FFF",
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  menuItem: {
    backgroundColor: "#3498DB",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 8,
  },
  menuText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  subMenuContainer: {
    backgroundColor: "#EAF2F8",
    borderRadius: 8,
    marginTop: 5,
    paddingVertical: 5,
  },
  subMenuItem: {
    padding: 12,
    paddingLeft: 25, // 🔹 Indentazione visiva per il sottomenù
    borderBottomWidth: 1,
    borderBottomColor: "#D5DBDB",
  },
  subMenuText: {
    fontSize: 14,
    color: "#2C3E50",
  },
  logoutButton: {
    backgroundColor: "#E74C3C",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  versionText: {
    fontSize: 12,
    color: "#7F8C8D",
    marginTop: 20,
    textAlign: "center",
  },
});

export default MenuStyles;
