/**
 * app主界面
 */
import React from 'react';
import { Image, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

// 首页
import HomeMain from '../home/Main';

// 发现
import TopicMain from '../topic/Main';

// 我的
import MeMain from '../me/Main';

export default TabNavigator({
  Home: {
    screen: HomeMain,
    navigationOptions: ({ navigation }) => ({
      title: '首页',
      tabBarIcon: ({ focused, tintColor }) => {
        let style = {width: 32, height: 32};
        let normal = <Image source={require('../resource/image/menu_home_n.png')} style={style} />;
        let select = <Image source={require('../resource/image/menu_home_s.png')} style={style} />;

        return focused ? select : normal;
      },
    }),
  },
  Topic: {
    screen: TopicMain,
    navigationOptions: ({ navigation }) => ({
      title: '发现',
      tabBarIcon: ({ focused, tintColor }) => {
        let style = {width: 32, height: 32};
        let normal = <Image source={require('../resource/image/menu_topic_n.png')} style={style} />;
        let select = <Image source={require('../resource/image/menu_topic_s.png')} style={style} />;

        return focused ? select : normal;
      },
    }),
  },
  Me: {
    screen: MeMain,
    navigationOptions: ({ navigation }) => ({
      title: '我的',
      tabBarIcon: ({ focused, tintColor }) => {
        let style = {width: 32, height: 32};
        let normal = <Image source={require('../resource/image/menu_me_n.png')} style={style} />;
        let select = <Image source={require('../resource/image/menu_me_s.png')} style={style} />;

        return focused ? select : normal;
      },
    }),
  },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#212d3e', //'#ffdc50',
    inactiveTintColor: '#212d3e',
    style: {
      height: 48,
      borderTopWidth: 1,
      borderTopColor: '#dbdde0',
      backgroundColor: '#fff',
      paddingLeft: 14,
      paddingRight: 14,
    },
    labelStyle: {
      fontSize: 10,
      paddingBottom: 3,
    },
  },
});
