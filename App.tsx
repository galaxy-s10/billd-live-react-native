import { Text, View } from 'react-native';
import { RTCPeerConnection } from 'react-native-webrtc';
import { BottomTabCpt } from './src/components/bottomTab';

export default function App() {
  console.log(RTCPeerConnection, 'RTCPeerConnection');
  return (
    <View>
      <Text>2311</Text>
      {/* <StatusBar style="auto" /> */}
      <BottomTabCpt></BottomTabCpt>
    </View>
  );
  // return (
  //   <NavigationContainer>
  //     {/* <StatusBar style="auto" /> */}
  //     <BottomTabCpt></BottomTabCpt>
  //   </NavigationContainer>
  // );
}
