import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import { ResizeMode, Video } from 'expo-av';
import { Dimensions, ImageBackground, Text } from 'react-native';
import { fetchLiveList } from '../../api/live';
import { ILive } from '../../interface';

const Home = () => {
  const avVideo = useRef<Video>();
  const [currentIndex, setCurrentIndex] = useState(0);
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
  }, []);

  async function handleOnSnapToItem(index) {
    setCurrentIndex(index);
    console.log('kk12', index, list[index].live_room.hls_url);
    if (avVideo.current) {
      await avVideo.current.unloadAsync();
      await avVideo.current.loadAsync(
        { uri: list[index].live_room.hls_url },
        {},
        false
      );
      await avVideo.current.playAsync();
    }
  }
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
        height={575}
        autoPlay={false}
        data={list}
        scrollAnimationDuration={1000}
        vertical
        onSnapToItem={(index) => handleOnSnapToItem(index)}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 1,
            }}>
            <ImageBackground
              source={{ uri: list[currentIndex].live_room.cover_img }}
              resizeMode={ResizeMode.COVER}
              style={{
                width: width,
                height: 575,
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              blurRadius={5}></ImageBackground>
            {currentIndex === index ? (
              <Video
                style={{
                  width: '100%',
                  height: '100%',
                }}
                ref={avVideo}
                resizeMode={ResizeMode.CONTAIN}
                source={{
                  uri: list[currentIndex].live_room.hls_url,
                }}
                shouldPlay
                isMuted={isMuted}
                // useNativeControls
              />
            ) : (
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flex: 1,
                  height: '100%',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 30,
                  }}>
                  加载中...
                </Text>
              </View>
            )}
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                position: 'absolute',
                bottom: 10,
                left: 10,
                padding: 3,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}>
              {item.live_room.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
