/**
 * app主界面
 *
 * @author renzhenguo<435328801@qq.com>
 */
import React from 'react';
import { Platform, Image } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

// 首页/发现/我的模块
import HomeMain from '../home/Main';
import TopicMain from '../topic/Main';
import MeMain from '../me/Main';

const ios = Platform.os === 'ios';

// Tab导航
export default TabNavigator({
  homeMain: {
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
  topicMain: {
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
  meMain: {
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
  tabBarComponent: TabBarBottom,// 标签栏的组件,跨平台不一致致所以设置上
  tabBarPosition: 'bottom',     // 标签栏的位置，可以是'top'或'bottom'
  swipeEnabled: false,          // 是否允许在标签之间滑动
  animationEnabled: ios,        // 改变标签时是否进行动画制作(安卓嵌套需要设置false)
  removeClippedSubviews: true,  // 通过释放非活动选项卡使用的资源来减少内存使用量的优化
  tabBarOptions: {              // 配置标签栏
    activeTintColor: '#212d3e',    // '#ffdc50', 活动选项卡的标签和图标颜色
    inactiveTintColor: '#999',     // 非活动选项卡的标签和图标颜色
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
