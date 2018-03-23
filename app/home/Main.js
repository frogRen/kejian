/**
 * 首页主界面
 */
import React from 'react';
import { Image } from 'react-native';
import { TabNavigator } from 'react-navigation';

// 首页/发现/我的模块
import Hot from './Hot';
import Follow from './Follow';

// Tab导航
export default TabNavigator({
  homeFollow: {
    screen: Follow,
    navigationOptions: ({ navigation }) => ({
      title: '关注',
    }),
  },
  homeHot: {
    screen: Hot,
    navigationOptions: ({ navigation }) => ({
      title: '热门',
    }),
  },
}, {
  tabBarPosition: 'top',        // 标签栏的位置，可以是'top'或'bottom'
  swipeEnabled: true,           // 是否允许在标签之间滑动
  animationEnabled: true,       // 改变标签时是否进行动画制作
  removeClippedSubviews: false, // 通过释放非活动选项卡使用的资源来减少内存使用量的优化
  tabBarOptions: {              // 配置标签栏
    activeTintColor: '#ffdc50',    // '#ffdc50', 活动选项卡的标签和图标颜色
    inactiveTintColor: '#212d3e',  // 非活动选项卡的标签和图标颜色
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
