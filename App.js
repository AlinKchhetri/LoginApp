import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/screens/LoginPage';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';

const App = () =>{

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='login'>
        <Stack.Screen name='login' component={LoginPage}/>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='signin' component={SignIn}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App
