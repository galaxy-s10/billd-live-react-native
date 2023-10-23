import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import { Dimensions, Text } from 'react-native';
import { fetchLiveList } from '../../api/live';
import { ILive } from '../../interface';

const Home = () => {
  const avVideo = useRef();
  const [isMuted, setIsMuted] = useState(false);
  const [list, setList] = useState<ILive[]>();
  async function getData() {
    let res = await fetchLiveList({ orderBy: 'desc', orderName: 'created_at' });
    setList(res.data.rows);
  }
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  useEffect(() => {
    getData();
    // console.log(avVideo.current, 'kkk1');
  }, []);

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Carousel
        loop
        width={width}
        height={572}
        autoPlay={false}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        mode="normal-vertical"
        vertical
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'red',
            }}>
            {/* <Video
              style={{
                width: '100%',
                height: '100%',
              }}
              ref={avVideo}
              resizeMode={ResizeMode.CONTAIN}
              source={{
                uri: 'https://srs-pull.hsslive.cn/livestream/roomId___5.m3u8',
              }} // Can be a URL or a local file.
              shouldPlay
              isMuted={isMuted}
            /> */}
            <Text style={{ textAlign: 'center', fontSize: 30 }}>{index}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
