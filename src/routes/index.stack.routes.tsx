import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Dashboard, LandPage } from "../pages"

const Stack = createNativeStackNavigator()
const Screen = Stack.Screen

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="LandPage"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="LandPage" component={LandPage} />
        <Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;