import React from 'react';
import {Text, View} from 'react-native';
import {ChevronRightIcon} from 'react-native-heroicons/outline';
function PickUpStore() {
  return (
    <View className="bg-gray-800 pr-4 pl-4 pb-2 justify-center items-end pt-5 flex flex-row">
      <View className="text-white flex-1 gap-1">
        <Text className="text-gray-400 text-xs">Pick-up store</Text>
        <Text className="text-white">Barkley village* 0.5 mi</Text>
      </View>
      <View className="border-black border p-1 rounded-md">
        <ChevronRightIcon color="white" width={20} height={20} />
      </View>
    </View>
  );
}

export default PickUpStore;
