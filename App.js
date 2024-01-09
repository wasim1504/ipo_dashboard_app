import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Toast from "react-native-toast-message";

import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import SignupForm from "./components/SignupForm";
import ExchangeRates from "./components/ExchangeRates";
import { AuthProvider } from "./components/AuthContext";
import Header from "./components/Header";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ExchangeRates"
            component={ExchangeRates}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Header"
            component={Header}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        {/* Remove the ref assignment for Toast */}
        {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
        <Toast />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
