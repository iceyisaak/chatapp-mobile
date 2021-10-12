import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../components/Login";
import SignUp from "../components/SignUp";

const AuthStack = createStackNavigator();

const AuthNavigator = () => {

  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <AuthStack.Screen
          name="Login"
          component={Login}
        />
        <AuthStack.Screen
          name="SignUp"
          component={SignUp}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;