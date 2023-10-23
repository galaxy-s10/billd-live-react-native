import { Card } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { fetchAreaAareLiveRoomList } from '../../api/area';
import { IArea } from '../../interface';

const User = () => {
  const [list, setList] = useState<IArea[]>();
  async function getData() {
    let res = await fetchAreaAareLiveRoomList({});
    setList(res.data.rows);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
      {list?.map((item) => {
        return (
          <Card key={item.id}>
            <Text>{item.name}</Text>
            {item.area_live_rooms.map((iten) => {
              return (
                <View
                  key={iten.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                  }}>
                  {iten.live_room?.cover_img ? (
                    <Image
                      style={{
                        width: 180,
                        height: 180 * (9 / 16),
                        borderRadius: 10,
                      }}
                      source={{
                        uri: iten.live_room?.cover_img,
                      }}></Image>
                  ) : (
                    <View
                      style={{
                        width: 120,
                        height: 120 * (9 / 16),
                        borderRadius: 10,
                        backgroundColor: 'red',
                        marginBottom: 10,
                      }}></View>
                  )}
                </View>
              );
            })}
          </Card>
        );
      })}
    </ScrollView>
  );
};

export default User;
