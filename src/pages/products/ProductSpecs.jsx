
import React from 'react';
import { View, Text, Image } from 'react-native';

function ProductSpecs({ route }) {
  const { specifications, product } = route.params;

  return (
    <View>
     
      <Image source={{ uri: product.image }} style={{ width: "100%", height: '70%', alignSelf:"center",   resizeMode: 'contain' }} />
      <Text style={{alignSelf:"center"}}>Especificações Detalhadas:</Text>
      <Text style={{ width: "80%", fontSize: 16, alignSelf:"center" }} >{specifications}</Text>
    </View>
  );
}

export default ProductSpecs;