import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {ProductType} from '../typing';
import {Product} from './Product';
type HorizantalProductsListsProps = {
  label: string;
  products: ProductType[];
};
export function HorizantalProductsLists({
  label,
  products,
}: HorizantalProductsListsProps) {
  function renderItem({item}: {item: ProductType}) {
    return (
      <View>
        <Product product={item} />
      </View>
    );
  }
  return (
    <View>
      <Text className="font-bold text-lg text-black">{label}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={products}
        renderItem={renderItem}
      />
    </View>
  );
}
