import React from 'react';
import { View, Text } from 'react-native';

function ProductSeller({ route }) {
  const { seller } = route.params;

  return (
    <View>
      <Text>Nome do Vendedor: {seller.name}</Text>
      <Text>Telefone: {seller.phone}</Text>
      <Text>Email: {seller.email}</Text>
      <Text>Nota: {seller.rating}</Text>
    </View>
  );
}

export default ProductSeller;
