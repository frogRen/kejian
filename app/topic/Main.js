/**
 * 发现主界面
 */
import React from 'react';
import { Text, View } from 'react-native';

export default class TopicMain extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>这里是发现频道</Text>
      </View>
    );
  }
}
