import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavouriteScreen from '../screens/FavouriteScreen';
import HomeScreen from '../screens/HomeScreen';
import RecentSearchScreen from '../screens/RecentSearchScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: '#FFFFFF',
        drawerActiveTintColor: 'black',
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Favourite" component={FavouriteScreen} />
      <Drawer.Screen name="Recent Search" component={RecentSearchScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
