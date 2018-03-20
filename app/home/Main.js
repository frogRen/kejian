/**
 * 首页主界面
 */
import React from 'react';
import { Text, View } from 'react-native';

export default class HomeMain extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>这里是首页</Text>
      </View>
    );
  }
}
