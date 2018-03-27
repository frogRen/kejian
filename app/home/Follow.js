/**
 * 首页关注内容
 *
 * @author renzhenguo<435328801@qq.com>
 */
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Request from '../resource/function/Request';

export default class HomeMain extends React.Component {
  componentDidMount() {
    Request.post('v2/medium/focus', {tid: '5a55ae8d58e3cf233257d8aa,5a4f4b3b58e3cf2335634d20'}).then( res => {
      console.log(res);
    }).catch( err => {
      console.log(err);
    });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <Text>关注内容</Text>
      </SafeAreaView>
    );
  }
}
