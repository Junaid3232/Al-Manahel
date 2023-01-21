import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {TabNavigator} from '../tab-navigation/TabNavigator';
// import {HistoryNavigator} from 'navigation/history-navigation';
import * as screens from 'screens';
import {DrawerContent} from './DrawerContent';
// import {InventoryNavigator} from 'navigation/Inventory-navigation';
// import {ReportsNavigation} from 'navigation/reports-navigation';
import {AppNavigator} from 'navigation/AppNavigator';
const Drawer = createDrawerNavigator();
export const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="home-drawer"
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
      }}
      drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="home-drawer" component={AppNavigator} />
      <Drawer.Screen name= 'setting' component={screens.Settings} />
    </Drawer.Navigator>
  );
};
