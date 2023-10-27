import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { BottomTabCpt } from './src/components/bottomTab/index';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <BottomTabCpt></BottomTabCpt>
    </NavigationContainer>
  );
}
