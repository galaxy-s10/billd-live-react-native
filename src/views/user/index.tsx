import { useState } from 'react';
import { Text } from 'react-native';
import { ILink } from '../../interface';

const User = () => {
  const [list, setList] = useState<ILink[]>();
  return <Text>User</Text>;
};

export default User;
