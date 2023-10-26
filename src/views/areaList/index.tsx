import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { fetchAreaLiveRoomList } from '../../api/area';
import { ILiveRoom } from '../../interface';

const AreaList = (navigation) => {
  const [list, setList] = useState<ILiveRoom[]>([]);
  const [areaId, setAreaId] = useState(-1);

  useEffect(() => {
    if (navigation.route && navigation.route.params) {
      const { id } = navigation.route.params;
      console.log(id, 'dddddd');
      setAreaId(id);
      getData(id);
    }
  }, []);

  async function getData(id) {
    let res = await fetchAreaLiveRoomList({
      id: id,
    });
    setList(res.data.rows);
  }
  return (
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
              ellipsizeMode="middle"></Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default AreaList;
