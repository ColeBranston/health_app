// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from './components/NavBar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="Main" 
          component={MainScreen} 
          // options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          // options={{ title: 'Details' }}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          // options={{ title: 'Settings' }}
        />
      </Stack.Navigator>
      <NavBar/>
    </NavigationContainer>
    
  );
}
