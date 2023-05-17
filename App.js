import { SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer} from '@react-navigation/native';
import HeaderTabNavigator from './components/headerTabNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HeaderTabNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}