import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductListScreen from './src/pages/products/ProductListScreen';
import Home from './src/pages/Home';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailsScreen from './src/pages/products/ProductDetailsScreen';
import { Button } from 'react-native';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function ProductStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="ProductList">
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{
          title: 'Lista de Produtos',
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          title: 'Detalhes do Produto',
          headerLeft: () => ( // Componente personalizado para o botão de voltar
            <Button
              onPress={() => navigation.navigate("ProductList")} // Navegar para "ProductList"
              title="Voltar"
              color="#007AFF" // Cor do botão
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Produtos" component={ProductStack} />
        {/* Outras telas do Drawer, se houver */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;