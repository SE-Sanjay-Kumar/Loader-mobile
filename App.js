
import { MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Register from './screens/Register';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import 'react-native-gesture-handler';


const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    pinky: '#D0AEE5',
    greey: '#D6D6D6'
  }
}

const Stack = createStackNavigator();
const App = () => {

  return (

    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />

            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>

  )
}

export default App;