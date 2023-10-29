// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { RTCPeerConnection } from 'react-native-webrtc';
import Rank from '../../views/rank';
const Stack = createNativeStackNavigator();

export function BottomTabCpt() {
  // const Tab = createBottomTabNavigator();
  console.log(Stack, 'lll;');
  console.log(RTCPeerConnection, 'rrr');
  setTimeout(() => {
    // import('react-native-webrtc').then((res) => {
    //   console.log(res, ';;;;');
    // });
  }, 3000);

  return (
    <View style={{ backgroundColor: 'yellow', width: 100, height: 100 }}>
      {/* <StatusBar style="auto" /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Rank">
          <Stack.Screen name="Rank" component={Rank} />
          {/* <Stack.Screen name="Area" component={Area} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
