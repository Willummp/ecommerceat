
import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

function ProductQuestions({ route }) {
  const { questions } = route.params;

  return (
    <View>
      <Text style={{ fontWeight: 'bold' }}>Q&A:</Text>
      <FlatList
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', paddingVertical: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.user}</Text>
            <Text>Data de Publicação: {item.date}</Text>
            <Text>Pergunta: {item.question}</Text>
            <Text>Resposta: {item.answer}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default ProductQuestions;