/**
 * 首页主界面
 */
import React from 'react';
import { Image } from 'react-native';
import { SafeAreaView, TabNavigator, TabBarBottom } from 'react-navigation';

// 首页/发现/我的模块
import Hot from './Hot';
import Follow from './Follow';

// Tab导航
const Tab = TabNavigator({
  homeFollow: {
    screen: Follow,
    navigationOptions: ({ navigation }) => ({
      title: '关注',
      tabBarIcon: ({ focused, tintColor }) => {
        if (!focused) {
          return null;
        }
        return <Image
          source={require('../resource/image/public_select_bg.png')}
          style={{ width: 28, height: 28, marginTop: 40, marginLeft: 22 }}
        />
      },
    }),
  },
  homeHot: {
    screen: Hot,
    navigationOptions: ({ navigation }) => ({
      title: '热门',
      tabBarIcon: ({ focused, tintColor }) => {
        if (!focused) {
          return null;
        }
        return <Image
          source={require('../resource/image/public_select_bg.png')}
          style={{ width: 28, height: 28, marginTop: 40, marginLeft: 22 }}
        />
      },
    }),
  },
}, {
  initialRouteName: 'homeHot',  // 默认
  tabBarComponent: TabBarBottom,// 标签栏的组件,跨平台不一致致所以设置上
  tabBarPosition: 'top',        // 标签栏的位置，可以是'top'或'bottom'
  swipeEnabled: true,           // 是否允许在标签之间滑动
  animationEnabled: true,       // 改变标签时是否进行动画制作
  removeClippedSubviews: false, // 通过释放非活动选项卡使用的资源来减少内存使用量的优化
  tabBarOptions: {              // 配置标签栏
    activeTintColor: '#000',    // ffdc50, 活动选项卡的标签和图标颜色
    inactiveTintColor: '#666',  // 非活动选项卡的标签和图标颜色
    style: {
      width: 160,
      height: 28,
      borderTopColor: '#fff',
      backgroundColor: '#fff',
    },
    tabStyle: {
    },
    labelStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  },
});

export default class HomeMain extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }} >
        <Tab />
      </SafeAreaView>
    );
  }
}
