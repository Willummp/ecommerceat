import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

// Importe os dados do JSON
import jsonData from '../../../data.json'; // Substitua 'dados.json' pelo caminho real do seu JSON

const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule uma requisição assíncrona para obter os dados do JSON
    setTimeout(() => {
      setProducts(jsonData.products);
      setIsLoading(false);
    }, 1000); // Tempo simulado para carregamento

    // Se você estiver usando uma API real, substitua o código acima pela chamada real à API.
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
          >
            <View>
              <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductListScreen;
