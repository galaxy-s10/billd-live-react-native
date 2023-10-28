import { Card } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, Text, View } from 'react-native';
import { fetchAreaAareLiveRoomList } from '../../api/area';
import Loading from '../../components/Loading';
import { IArea } from '../../interface';
const Area = ({ navigation }) => {
  const [list, setList] = useState<IArea[]>();
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    let res = await fetchAreaAareLiveRoomList({});
    setLoading(false);
    setList(res.data.rows);
  }

  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Loading size="large"></Loading>
        <Text>加载中...</Text>
      </View>
    </View>
  ) : (
    <ScrollView
      style={{
        paddingTop: StatusBar.currentHeight,
        position: 'relative',
        // flex: 1,
        // backgroundColor: 'red',
      }}>
      {list?.map((item) => {
        return (
          <Card
            key={item.id}
            containerStyle={{ marginTop: 0, marginBottom: 15 }}>
            <View
              style={{
                paddingBottom: 10,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'baseline',
              }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {item.name}
              </Text>
              <Text
                onPress={() =>
                  navigation.navigate('AreaList', {
                    name: item.name,
                    id: item.id,
                  })
                }>
                查看全部
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
              }}>
              {item.area_live_rooms.map((iten) => {
                return (
                  <View key={iten.id} style={{ marginBottom: 10 }}>
                    <View>
                      <Image
                        style={{
                          width: 160,
                          height: 160 * (9 / 16),
                          borderRadius: 10,
                        }}
                        source={{
                          uri:
                            iten.live_room?.cover_img ||
                            iten.live_room?.users?.[0]?.avatar,
                        }}></Image>
                    </View>
                    <Text
                      style={{ paddingLeft: 2, width: 150 }}
                      numberOfLines={1}
                      ellipsizeMode="middle">
                      {iten.live_room.name}
                    </Text>
                  </View>
                );
              })}
              {!item.area_live_rooms.length && <Text>暂无数据</Text>}
            </View>
          </Card>
        );
      })}
      <View style={{ paddingBottom: 20 }}></View>
    </ScrollView>
  );
};

export default Area;
