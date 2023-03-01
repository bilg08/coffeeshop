import React from 'react';
import {Image, View} from 'react-native';
export function Banner(): JSX.Element {
  return (
    <View className="relative px-2 pt-5">
      <Image
        className="h-60 w-full rounded-lg"
        source={require('../asset/image/badge.webp')}
      />
      {/* <Text className="font-bold text-black text-lg">
        HERE'S TO MORE SUNNY DAYS AHEAD!
      </Text> */}
    </View>
  );
}
