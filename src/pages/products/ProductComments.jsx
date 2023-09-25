
import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

function ProductComments({ route }) {
  const { comments } = route.params;

  return (
    <View>
      <Text style={{ fontWeight: 'bold' }}>Comentários:</Text>
      <FlatList
        data={comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', paddingVertical: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.user}</Text>
            <Text>Data de Publicação: {item.date}</Text>
            <Text>Comentário: {item.comment}</Text>
            <Text>Nota: {item.rating}</Text>
          </View>
        )}
      />
    </View>
  );
}
export default ProductComments;