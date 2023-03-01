import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180,
  },
});
type ProductProps = {
  thumbnail: string;
  title: string;
  price: number;
};
export function Product({product}: {product: ProductProps}) {
  const navigation = useNavigation();
  function navigate() {
    navigation.navigate('Profile' as never, {});
  }
  return (
    <TouchableOpacity onPress={navigate} className="m-1">
      <Image
        source={{
          uri: product.thumbnail,
        }}
        className="rounded-md"
        style={styles.image}
      />
      <Text className="text-lg font-medium">{product.title}</Text>
      <Text className="font-thin">${product.price} / spruce</Text>
    </TouchableOpacity>
  );
}
