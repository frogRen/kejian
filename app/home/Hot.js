/**
 * 首页热门内容
 *
 * @author renzhenguo<435328801@qq.com>
 */
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class HomeMain extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <Text>热门内容</Text>
      </SafeAreaView>
    );
  }
}
