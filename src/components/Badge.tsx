import React from 'react';
import {ShoppingBagIcon} from 'react-native-heroicons/solid';
import {Text, View} from 'react-native';

type BadgeProps = {
  badgeContent: number | string;
};

export function Badge(props: BadgeProps) {
  return (
    <View className="relative p-2">
      <Text className="absolute pr-1 text-white pl-1 top-0 bg-yellow-800 rounded-full text-md">
        {props.badgeContent}
      </Text>
      <ShoppingBagIcon width={20} height={20} color="black" />
    </View>
  );
}
Badge.defaultProps = {
  badgeContent: 0,
};
