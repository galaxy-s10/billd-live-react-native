import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { fetchAreaLiveRoomList } from '../../api/area';
import Loading from '../../components/Loading';
import { ILiveRoom } from '../../interface';

const AreaList = (navigation) => {
  const [list, setList] = useState<ILiveRoom[]>([]);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      setList([]);
    }
    getData();
  }, [isFocused]);

  async function getData() {
    if (navigation.route && navigation.route.params) {
      const { id } = navigation.route.params;
      setLoading(true);
      let res = await fetchAreaLiveRoomList({
        id: id,
      });
      setLoading(false);
      setList(res.data.rows);
    }
  }
  return loading ? (
    <Loading size="large"></Loading>
  ) : (
    <ScrollView
      contentContainerStyle={{
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
      }}>
      {list.map((iten) => {
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
                  uri: iten.cover_img || iten.users?.[0]?.avatar,
                }}></Image>
            </View>
            <Text
              style={{ paddingLeft: 2, width: 150 }}
              numberOfLines={1}
              ellipsizeMode="middle">
              {iten.name}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default AreaList;
