import React, { Component } from 'react';
import {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <TabBarIOS
        style={styles.tabbar}
        barTintColor="#fff"
        tintColor="#ffdc50"
      >
        <TabBarIOS.Item
          title="首页"
        >
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="发现"
        >
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="我的"
        >
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    height: 48,
  }
});
