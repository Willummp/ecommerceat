
import React from 'react';
import { View, Text, Image } from 'react-native';

function ProductSpecs({ route }) {
  const { specifications, product } = route.params;

  return (
    <View>
      <Text>Especificações Detalhadas:</Text>
      <Image source={{ uri: product.image }} style={{ width: 600, height: 600, alignSelf:"center" }} />
      <Text style={{ width: 600, fontSize: 16, alignSelf:"center" }} >{specifications}</Text>
    </View>
  );
}

export default ProductSpecs;