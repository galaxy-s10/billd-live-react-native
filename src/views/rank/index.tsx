import { ScrollView, StatusBar, Text } from 'react-native';

const Rank = () => {
  return (
    <ScrollView style={{ paddingTop: StatusBar.currentHeight }}>
      <Text>Rank</Text>
    </ScrollView>
  );
};

export default Rank;
