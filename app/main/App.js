/**
 * app主界面
 */
import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';

export default class AppMain extends Component {
  render() {
    return (
      <TabNavigator tabBarStyle={styles.tabbar}>
        {/* 首页 */}
        {this.renderTabBarItem('首页')}
        {/* 发现 */}
        {this.renderTabBarItem('发现')}
        {/* 我的 */}
        {this.renderTabBarItem('我的')}
      </TabNavigator>
    );
  }

  // 处理tab子节点
  renderTabBarItem(title) {
    return(
      <TabNavigator.Item
        title={title}
        titleStyle={styles.tabbarItemTitle}
      >
      </TabNavigator.Item>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    height: 48,
    borderTopWidth: 1,
    borderTopColor: '#dbdde0',
    backgroundColor: '#fff',
  },
  tabbarItemTitle: {
    color: '#212d3e',
    fontSize: 10,
  },
  tabbarItemIcon: {
    width: 30,
    height: 30,
  },
});
