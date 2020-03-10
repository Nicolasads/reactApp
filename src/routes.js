import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';

import Feed from './pages/Feed';
import logo from './assets/instagram.png';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#f5f5f5'},
          headerTitle: <Image source={logo} />,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name=" " component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
