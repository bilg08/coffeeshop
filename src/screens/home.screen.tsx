import React from 'react';
import {ScrollView} from 'react-native';
import {
  Banner,
  Header,
  HorizantalProductsLists,
  ProductsTabView,
} from '../components';
import PickUpStore from '../components/PickUpStore';

const products = new Array(10).fill({
  thumbnail:
    'https://images.unsplash.com/photo-1629019416996-712aa1bd87f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvY2ElMjBjb2xhfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  price: 3.14,
  title: 'Coca cola',
});
export function Homescreen() {
  return (
    <ScrollView className="flex flex-1">
      <Header />
      <PickUpStore />
      <Banner />
      <HorizantalProductsLists label={'Your Favorite'} products={products} />
      <HorizantalProductsLists label={'Seasonal Drinks'} products={products} />
      <ProductsTabView />
    </ScrollView>
  );
}
