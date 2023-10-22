import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Area from '../../views/area';
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

import { themeColor } from '../../constant';

const Tab = createBottomTabNavigator();

export function BottomTabCpt() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="首页"
        component={Home}
        options={{
          tabBarActiveTintColor: themeColor,
          tabBarStyle: { paddingBottom: 5 },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={{ width: 20, height: 20 }}
                source={homeActivePng}></Image>
            ) : (
              <Image style={{ width: 20, height: 20 }} source={homePng}></Image>
            ),
        }}
      />
      <Tab.Screen
        name="分区"
        component={Area}
        options={{
          tabBarActiveTintColor: themeColor,
          tabBarStyle: { paddingBottom: 5 },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={{ width: 20, height: 20 }}
                source={areaActivePng}></Image>
            ) : (
              <Image style={{ width: 20, height: 20 }} source={areaPng}></Image>
            ),
        }}
      />
      <Tab.Screen
        name="排行"
        component={Rank}
        options={{
          tabBarActiveTintColor: themeColor,
          tabBarStyle: { paddingBottom: 5 },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={{ width: 20, height: 20 }}
                source={rankActivePng}></Image>
            ) : (
              <Image style={{ width: 20, height: 20 }} source={rankPng}></Image>
            ),
        }}
      />
      <Tab.Screen
        name="我的"
        component={User}
        options={{
          tabBarActiveTintColor: themeColor,
          tabBarStyle: { paddingBottom: 5 },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={{ width: 20, height: 20 }}
                source={userActivePng}></Image>
            ) : (
              <Image style={{ width: 20, height: 20 }} source={userPng}></Image>
            ),
        }}
      />
    </Tab.Navigator>
  );
}
