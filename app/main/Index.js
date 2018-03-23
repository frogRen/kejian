/**
 * 主入口
 *
 * 完成导航配置、初始化逻辑等
 *
 * @author renzhenguo<435328801@qq.com>
 */
import React from 'react';
import { StackNavigator } from 'react-navigation';

// 启动页/选主题站/主模块
import StartPage from './StartPage';
import InitTopic from './InitTopic';
import AppMain from './AppMain';

// 导航组件
export default StackNavigator ({
  mainApp: { screen: AppMain },
  mainPage: { screen: StartPage },
  mainTopic: { screen: InitTopic },
}, {
  initialRouteName: 'mainPage',
  headerMode: 'none',
  initialRouteParams: {},
});
