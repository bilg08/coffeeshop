import React from 'react';
import {View} from 'react-native';
import Logo from '../asset/icons/logo';
import {Badge} from './Badge';

export function Header() {
  return (
    <View className="flex h-14 flex-row pr-2 pl-2">
      <View className="flex-1 justify-center items-center">
        <Logo />
      </View>
      <View className="justify-center items-center">
        <Badge />
      </View>
    </View>
  );
}
