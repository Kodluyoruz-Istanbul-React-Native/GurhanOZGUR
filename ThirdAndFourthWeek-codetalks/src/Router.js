import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';

import LoginPage from './pages/LoginPage';
import SignPage from './pages/SignPage';
import RoomsPage from './pages/RoomsPage';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="SignPage"
          component={SignPage}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginPage"
          component={LoginPage}
        />
        <Stack.Screen
          name="RoomsPage"
          component={RoomsPage}
          options={{
            headerTitle: 'Odalar',
            headerTintColor: '#ff6f00',
            headerLeft: () => {
              //TODO Back Button'ı kaldırır.
              return null;
            },
          }}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
