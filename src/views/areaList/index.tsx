import { Text } from 'react-native';
const AreaList = (navigation) => {
  let res = navigation.name;
  if (navigation.route && navigation.route.params) {
    const { id } = navigation.route.params;
    console.log(id, 'dddddd');
  }
  return <Text>AreaList</Text>;
};

export default AreaList;
