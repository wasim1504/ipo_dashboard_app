import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Logout from "./Logout";
import Dashboard from "./Dashboard";
import ExchangeRates from "./ExchangeRates";

const Header = () => {
  const [selectedScreen, setSelectedScreen] = useState("Dashboard");

  const handleNavigation = (screen) => {
    setSelectedScreen(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleNavigation("Dashboard")}>
          <Text
            style={[
              styles.navLink,
              selectedScreen === "Dashboard" && styles.selected,
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation("ExchangeRates")}>
          <Text
            style={[
              styles.navLink,
              selectedScreen === "ExchangeRates" && styles.selected,
            ]}
          >
            ExchangeRates
          </Text>
        </TouchableOpacity>
        <Logout />
      </View>
      {selectedScreen === "Dashboard" && <Dashboard />}{" "}
      {/* Render Dashboard component */}
      {selectedScreen === "ExchangeRates" && <ExchangeRates />}{" "}
      {/* Render ExchangeRates component */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "darkblue",
    padding: 10,
    paddingTop: 40, // Adjust the paddingTop for the status bar
  },
  navLink: {
    color: "white",
    fontSize: 16,
    marginRight: 20,
  },
  selected: {
    fontWeight: "bold",
  },
});

export default Header;
