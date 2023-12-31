import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { enableScreens } from 'react-native-screens';
import { BottomTabCpt } from './src/components/bottomTab/index';
enableScreens(false);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <BottomTabCpt></BottomTabCpt>
    </NavigationContainer>
  );
}
