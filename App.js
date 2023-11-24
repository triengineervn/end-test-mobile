import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FisrtScreen from "./src/screens/FisrtScreen";
import SecondScreen from "./src/screens/SecondScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Fisrt" component={FisrtScreen}/>
        <Stack.Screen name="Second" component={SecondScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}