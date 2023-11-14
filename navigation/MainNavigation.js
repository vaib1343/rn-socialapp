import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../pages/Home/Home';
import React from 'react';
import Profile from '../pages/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Photos from '../pages/Profile/Photos/Photos';
import Videos from '../pages/Profile/Videos/Videos';
import Saved from '../pages/Profile/Saved/Saved';
import TabTitle from '../pages/Profile/TabTitle/TabTitle';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}>
      <ProfileTabs.Screen
        name="Photos"
        component={Photos}
        options={{
          tabBarLabel: ({focused}) => (
            <TabTitle title="Photos" focused={focused} />
          ),
        }}
      />
      <ProfileTabs.Screen
        name="Videos"
        options={{
          tabBarLabel: ({focused}) => (
            <TabTitle title="Videos" focused={focused} />
          ),
        }}
        component={Videos}
      />
      <ProfileTabs.Screen
        name="Saved"
        options={{
          tabBarLabel: ({focused}) => (
            <TabTitle title="Saved" focused={focused} />
          ),
        }}
        component={Saved}
      />
    </ProfileTabs.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name="Drawer" component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
