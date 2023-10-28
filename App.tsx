import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CounterPage from "./src/pages/CounterPage";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsPage from "./src/pages/SettingsPage";
import Loginpage from "./src/pages/Loginpage";
import NationalaizePage from "./src/pages/NationalaizePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const stack = createStackNavigator();

const bottom_tab = createBottomTabNavigator();

const BasicDashboardScreen = () => {
  return (
    <stack.Navigator>
      <stack.Screen name='Counter' component={CounterPage}></stack.Screen>
      <stack.Screen name='Login' component={Loginpage}></stack.Screen>
    </stack.Navigator>
  )
}


const App = () => {
  return (

    <NavigationContainer>
      <bottom_tab.Navigator>
        <bottom_tab.Screen name="Dashboard" component={BasicDashboardScreen}></bottom_tab.Screen>
        <bottom_tab.Screen name="Settings" component={SettingsPage}></bottom_tab.Screen>
        <bottom_tab.Screen name="Nationalaize" component={NationalaizePage}></bottom_tab.Screen>
      </bottom_tab.Navigator>
    </NavigationContainer>


  )
}

export default App;