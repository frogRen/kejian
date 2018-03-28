/**
 * 首页关注内容
 *
 * @author renzhenguo<435328801@qq.com>
 */
import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import CardView from './CardView';
import Request from '../resource/function/Request';

export default class HomeFollow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { change: true };

    this.contents = [];
  }

  // 加载数据
  componentDidMount() {
    Request.post('v2/medium/focus', {tid: '5a55ae8d58e3cf233257d8aa,5a4f4b3b58e3cf2335634d20'}).then( res => {
      this.contents = res.list;
      this.setState({ change: true });
    }).catch( err => {
    });
  }

  render() {
    let spliter = <Text style={ styles.spliter } ></Text>

    return (
      <SafeAreaView style={{ flex: 1 }} >

        <FlatList
          data={ this.contents }
          renderItem={ ({item}) => <CardView data={item} /> }
          keyExtractor={ (item) => { return item.id; }}
          ItemSeparatorComponent={ (highlighted) => spliter }
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  spliter: {
    height: 10,
    backgroundColor: '#f7f7f7',
  },
});
