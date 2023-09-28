import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

// Importando  os dados do JSON
import jsonData from '../../../data.json'; 

const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(jsonData.products);
      setIsLoading(false);
    }, 1000); 

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
            <View style={{backgroundColor: "#a6f4f2", margin: 10, alignItems: "center", padding: 20, borderRadius: 10}}>
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
