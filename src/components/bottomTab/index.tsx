import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, TouchableOpacity } from 'react-native';

import Area from '../../views/area';
import AreaList from '../../views/areaList';
import Home from '../../views/home';
import Rank from '../../views/rank';
import User from '../../views/user';

import areaPng from '../../../assets/images/tabbar/area.png';
import areaActivePng from '../../../assets/images/tabbar/area_active.png';
import homePng from '../../../assets/images/tabbar/home.png';
import homeActivePng from '../../../assets/images/tabbar/home_active.png';
import rankPng from '../../../assets/images/tabbar/rank.png';
import rankActivePng from '../../../assets/images/tabbar/rank_active.png';
import userPng from '../../../assets/images/tabbar/user.png';
import userActivePng from '../../../assets/images/tabbar/user_active.png';

import leftPng from '../../../assets/images/left.png';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { themeColor } from '../../constant';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  img: {
    width: 20,
    height: 20,
  },
});

const tabBarIcon = ({ focused, icon, focusedIcon }) =>
  focused ? (
    <Image style={styles.img} source={focusedIcon}></Image>
  ) : (
    <Image style={styles.img} source={icon}></Image>
  );

const screenOptions = {
  tabBarActiveTintColor: themeColor,
  tabBarStyle: { paddingBottom: 5 },
};

function getHeaderTitle(navigation) {
  let res = navigation.name;
  if (navigation.route && navigation.route.params) {
    const { name } = navigation.route.params;
    res = name;
  }
  return res + '分区';
}

function LeftBtn() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Area')}>
      <Image
        style={{
          marginLeft: 10,
          width: 24,
          height: 24,
        }}
        source={leftPng}></Image>
    </TouchableOpacity>
  );
}

export function BottomTabCpt() {
  return (
    <Tab.Navigator
      screenOptions={{
        ...screenOptions,
        headerTitleStyle: {
          fontSize: 18, // 设置标题的字体大小
        },
      }}
      // tabBar={() => null}
      initialRouteName="User">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerStatusBarHeight: 20,
          header: () => null,
          headerTitle: '首页',
          tabBarLabel: '首页',
          tabBarIcon: ({ focused }) =>
            tabBarIcon({ focused, icon: homePng, focusedIcon: homeActivePng }),
        }}
      />
      <Tab.Screen
        name="Area"
        component={Area}
        options={{
          headerShown: false, //是否显示标题。将其设置为false隐藏标头。
          // headerTitle: '分区',
          tabBarLabel: '分区',
          tabBarIcon: ({ focused }) =>
            tabBarIcon({ focused, icon: areaPng, focusedIcon: areaActivePng }),
        }}
      />
      <Tab.Screen
        name="AreaList"
        component={AreaList}
        options={(navigation) => ({
          tabBarStyle: { display: 'none' },
          tabBarIconStyle: { display: 'none' },
          tabBarItemStyle: { display: 'none' },
          headerTitle: getHeaderTitle(navigation),
          headerTitleAlign: 'center',
          headerLeft: (props) => <LeftBtn></LeftBtn>,
        })}
      />
      <Tab.Screen
        name="Rank"
        component={Rank}
        options={{
          headerShown: false,
          headerTitle: '排行',
          tabBarLabel: '排行',
          tabBarIcon: ({ focused }) =>
            tabBarIcon({ focused, icon: rankPng, focusedIcon: rankActivePng }),
        }}
      />

      <Tab.Screen
        name="User"
        component={User}
        options={{
          headerShown: false,
          headerTitle: '我的',
          tabBarLabel: '我的',
          tabBarIcon: ({ focused }) =>
            tabBarIcon({ focused, icon: userPng, focusedIcon: userActivePng }),
        }}
      />
    </Tab.Navigator>
  );
}
