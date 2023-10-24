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

export function BottomTabCpt() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="首页"
        component={Home}
        options={{
          ...screenOptions,
          tabBarIcon: ({ focused }) =>
            tabBarIcon({ focused, icon: homePng, focusedIcon: homeActivePng }),
        }}
      />
      <Tab.Screen
        name="分区"
        component={Area}
        options={{
          ...screenOptions,
          tabBarIcon: ({ focused }) =>
            tabBarIcon({ focused, icon: areaPng, focusedIcon: areaActivePng }),
        }}
      />
      <Tab.Screen
        name="排行"
        component={Rank}
        options={{
          ...screenOptions,
          tabBarIcon: ({ focused }) =>
            tabBarIcon({ focused, icon: rankPng, focusedIcon: rankActivePng }),
        }}
      />
      <Tab.Screen
        name="我的"
        component={User}
        options={{
          ...screenOptions,
          tabBarIcon: ({ focused }) =>
            tabBarIcon({ focused, icon: userPng, focusedIcon: userActivePng }),
        }}
      />
    </Tab.Navigator>
  );
}
