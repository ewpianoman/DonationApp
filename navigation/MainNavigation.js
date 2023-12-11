import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Routes} from './Routes';
import Registration from '../screens/Registration/Registration';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';
import SingleDonationItem from '../screens/SingleDonationItem/SingleDonationItem';

const Stack = createStackNavigator();
export const NonAuthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{head: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Registration} component={Registration} />
      <Stack.Screen name={Routes.Login} component={Login} />
    </Stack.Navigator>
  );
};

export const Authenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{head: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>
  );
};
