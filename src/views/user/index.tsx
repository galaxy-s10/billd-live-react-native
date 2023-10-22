import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { fetchLinkList } from '../../api/link';
import { ILink } from '../../interface';

const User = () => {
  const [list, setList] = useState<ILink[]>();
  async function getData() {
    let res = await fetchLinkList({});
    setList(res.data.rows);
  }
  getData();
  return (
    <Text>
      User
      {list?.map((item) => {
        return (
          <View key={item.id}>
            <Text>{item.name}</Text>
            <Image
              style={{ width: 100, height: 100 }}
              source={{
                uri: item.avatar,
              }}></Image>
          </View>
        );
      })}
    </Text>
  );
};

export default User;
