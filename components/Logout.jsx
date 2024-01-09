import React from "react";
import { Button, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "./AuthContext";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const Logout = () => {
  const { logout } = useAuth();
  const navigation = useNavigation();

  const handleLogOut = () => {
    logout();
    Toast.show({
      type: "success",
      text1: "You have been logged out successfully",
    });
    navigation.navigate("Login");
  };

  return (
    <Button
      onPress={handleLogOut}
      title="Logout"
      color="dark"
      style={styles.button}
    >
      <Ionicons
        name="log-out-outline"
        size={24}
        color="white"
        style={styles.icon}
      />
      <Text style={styles.buttonText}>Logout</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "darkblue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
});

export default Logout;
