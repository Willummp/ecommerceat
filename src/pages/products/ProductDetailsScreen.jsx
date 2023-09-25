import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
  options={{ headerShown: false }} // Ocultar a barra de navegação
/>

    <Tab.Screen
      name="Vendedor"
      component={ProductSeller}
      initialParams={{ seller: product.seller }}
      options={{ headerShown: false }} // Ocultar a barra de navegação
    />
    <Tab.Screen
      name="Comentários"
      component={ProductComments}
      initialParams={{ comments: product.comments }}
      options={{ headerShown: false }} // Ocultar a barra de navegação
    />
    <Tab.Screen
      name="Q&A"
      component={ProductQuestions}
      initialParams={{ questions: product.questions }}
      options={{ headerShown: false }} // Ocultar a barra de navegação
    />
  </Tab.Navigator>
  

  );
}

export default ProductDetailsScreen;