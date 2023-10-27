import { ScrollView, StatusBar, Text } from 'react-native';

const User = () => {
  return (
    <ScrollView style={{ paddingTop: StatusBar.currentHeight }}>
      <Text>User</Text>
    </ScrollView>
  );
};

export default User;
