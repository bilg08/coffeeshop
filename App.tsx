import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Tabs} from './src/navigation/tabs';
function App(): JSX.Element {
  // const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
