import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  useWindowDimensions,
  View,
  StyleSheet,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Product} from './Product';
const products = new Array(10).fill({
  thumbnail:
    'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  price: 3.14,
  title: 'Coca cola',
});
export function ProductsTabView() {
  const layout = useWindowDimensions();
  const styles = StyleSheet.create({
    body: {
      width: layout.width,
      height: layout.height,
      marginTop: 20,
    },
    routeBody: {
      height: layout.height,
      width: layout.width,
      flexWrap: 'wrap',
    },
  });
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Special'},
    {key: 'second', title: 'Hot'},
    {key: 'third', title: 'Food'},
  ]);
  const FirstRoute = () => (
    <ScrollView>
      <View style={styles.routeBody}>
        {products.map(product => (
          <Product product={product} />
        ))}
      </View>
    </ScrollView>
  );

  const SecondRoute = () => (
    <ScrollView>
      <View style={styles.routeBody}>
        {products.map(product => (
          <Product product={product} />
        ))}
      </View>
    </ScrollView>
  );
  const ThirdRoute = () => (
    <ScrollView>
      <View style={styles.routeBody}>
        {products.map(product => (
          <Product product={product} />
        ))}
      </View>
    </ScrollView>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });
  function renderLabel(scene: {route: {title: string}; focused: boolean}) {
    const myStyle = {
      color: scene.focused ? '#D3A762' : 'black',
    };
    const label = scene.route.title;
    return <Text style={myStyle}>{label}</Text>;
  }
  function renderTabBar(props: any) {
    return (
      <TabBar
        {...props}
        renderLabel={renderLabel}
        style={{backgroundColor: 'white'}}
        indicatorStyle={{backgroundColor: '#D3A762'}}
      />
    );
  }

  return (
    <View style={styles.body}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}
