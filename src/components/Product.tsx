import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
type ProductProps = {
  thumbnail: string;
  title: string;
  price: number;
};
export function Product({product}: {product: ProductProps}) {
  return (
    <View className="m-1">
      <Image
        source={{
            uri:product.thumbnail,
        }}
        className="rounded-md"
        style={styles.image}
      />
      <Text className="text-lg font-medium">{product.title}</Text>
      <Text className="font-thin">${product.price} / spruce</Text>
    </View>
  );
}
