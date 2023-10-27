import { useIsFocused } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { ImageBackground, View } from 'react-native';

import { ResizeMode, Video } from 'expo-av';
import { Dimensions, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { fetchLiveList } from '../../api/live';
import Loading from '../../components/Loading';
import { themeColor } from '../../constant';
import { ILive } from '../../interface';

const Home = () => {
  const videoWrap = useRef<View>();
  const avVideo = useRef<Video>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [list, setList] = useState<ILive[]>();
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    let res = await fetchLiveList({ orderBy: 'desc', orderName: 'created_at' });
    setLoading(false);
    setList(res.data.rows);
  }
  const isFocused = useIsFocused();

  const width = Dimensions.get('window').width;
  const [heightRes, setHeightRes] = useState(1);

  useEffect(() => {
    getData();
  }, []);

  async function delVideo() {
    if (avVideo.current) {
      await avVideo.current.unloadAsync();
    }
  }
  async function startVideo(index) {
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

  useEffect(() => {
    if (!isFocused) {
      delVideo();
    } else {
      startVideo(currentIndex);
    }
  }, [isFocused]);

  async function handleOnSnapToItem(index) {
    setCurrentIndex(index);
  }
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // backgroundColor: 'red',
      }}
      ref={videoWrap}
      onLayout={() => {
        videoWrap.current.measure((x, y, w, h, pageX, pageY) => {
          setHeightRes(h);
        });
      }}>
      <Carousel
        loop
        width={width}
        height={heightRes}
        autoPlay={false}
        data={list}
        scrollAnimationDuration={500}
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
                height: heightRes,
                position: 'absolute',
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
                <Loading size="large"></Loading>
                <Text style={{ color: themeColor }}>加载中...</Text>
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
