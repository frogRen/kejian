/**
 * 首页主界面
 */
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class HomeMain extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <Text>这里是首页</Text>
      </SafeAreaView>
    );
  }
}
