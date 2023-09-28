import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Importe os ícones que você deseja usar
import ProductSeller from './ProductSeller';
import ProductComments from './ProductComments';
import ProductQuestions from './ProductQuestions';
import ProductSpecs from './ProductSpecs';

const Tab = createBottomTabNavigator();

function ProductDetailsScreen({ route }) {
  const { product } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Especificações"
        component={ProductSpecs}
        initialParams={{ specifications: product.specifications, product: product }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-information-circle" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Vendedor"
        component={ProductSeller}
        initialParams={{ seller: product.seller }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Comentários"
        component={ProductComments}
        initialParams={{ comments: product.comments }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-chatbubbles" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Q&A"
        component={ProductQuestions}
        initialParams={{ questions: product.questions }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-help-circle" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default ProductDetailsScreen;
