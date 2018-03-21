/**
 * 启动时选择主题站
 */
import React from 'react';
import { Text, View } from 'react-native';

export default class MeMain extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>请选择主题站</Text>
      </View>
    );
  }
}
