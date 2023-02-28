import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Homescreen, Profilescreen} from '../screens';
import {View} from 'react-native';
import {
  HomeIcon,
  ShoppingCartIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
type TabType = {
  name: string;
  Icon: React.FC;
  component: React.FC;
};
const Tab = createBottomTabNavigator();
const tabs: TabType[] = [
  {
    name: 'Home',
    Icon: HomeIcon,
    component: Homescreen,
  },
  {
    name: 'Scan',
    Icon: HomeIcon,
    component: Homescreen,
  },
  {
    name: 'Order',
    Icon: ShoppingCartIcon,
    component: Homescreen,
  },
  {
    name: 'Profile',
    Icon: UserIcon,
    component: Profilescreen,
  },
];
export function Tabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {tabs.map((tab: TabType) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: () => (
              <View>
                <tab.Icon className="text-gray-300" />
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
