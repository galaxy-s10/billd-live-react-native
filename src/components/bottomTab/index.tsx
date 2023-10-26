import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

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

import { StyleSheet, Text, View } from 'react-native';
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
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text>返回</Text>
    </View>
  );
}

export function BottomTabCpt() {
  return (
    <Tab.Navigator
      screenOptions={{
        ...screenOptions,
      }}
      // tabBar={() => null}
      initialRouteName="首页">
      <Tab.Screen
        name="首页"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            tabBarIcon({ focused, icon: homePng, focusedIcon: homeActivePng }),
        }}
      />
      <Tab.Screen
        name="分区"
        component={Area}
        options={{
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
        name="排行"
        component={Rank}
        options={{
          tabBarIcon: ({ focused }) =>
            tabBarIcon({ focused, icon: rankPng, focusedIcon: rankActivePng }),
        }}
      />

      <Tab.Screen
        name="我的"
        component={User}
        options={{
          tabBarIcon: ({ focused }) =>
            tabBarIcon({ focused, icon: userPng, focusedIcon: userActivePng }),
        }}
      />
    </Tab.Navigator>
  );
}
