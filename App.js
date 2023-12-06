import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import ItemDetailScreen from './screen/ItemDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ItemDetailScreen" component={ItemDetailScreen} options={{ title: 'Info Data' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
