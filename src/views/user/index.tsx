import { useIsFocused } from '@react-navigation/native';
import { Button } from '@rneui/base';
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Dimensions, StatusBar, Text, View } from 'react-native';
import { RTCPeerConnection } from 'react-native-webrtc';

const User = () => {
  const [errMsg, setErrMsg] = useState('');
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  const isFocused = useIsFocused();
  const width = Dimensions.get('window').width;
  const [heightRes, setHeightRes] = useState(1);

  useEffect(() => {
    const h = width / (3 / 4);
    setHeightRes(h);
    console.log(RTCPeerConnection);
  }, []);

  async function startLive() {
    if (!permission.granted) {
      let res = await requestPermission();
      if (!res.granted) {
        setErrMsg('获取权限失败');
      } else {
        setErrMsg('');
      }
    }
  }

  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight,
        display: 'flex',
        flex: 1,
      }}>
      <Text>{errMsg}</Text>
      <Button onPress={toggleCameraType}>
        切换到{type === CameraType.front ? '后' : '前'}镜头
      </Button>
      <Camera style={{ width: width, height: heightRes }} type={type}></Camera>
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Button onPress={() => startLive()}>开始直播</Button>
      </View>
    </View>
  );
};

export default User;
