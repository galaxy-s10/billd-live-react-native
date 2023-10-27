import { ActivityIndicator } from 'react-native';
import { themeColor } from '../../constant';

const Loading = (props: { size: 'small' | 'large' }) => {
  return (
    <ActivityIndicator size={props.size} color={themeColor}></ActivityIndicator>
  );
};

export default Loading;
