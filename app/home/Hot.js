/**
 * 首页热门内容
 *
 * @author renzhenguo<435328801@qq.com>
 */
import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import CardView from './CardView';
import Request from '../resource/function/Request';

export default class HomeHot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { change: true };

    this.contents = [];
  }

  // 加载数据
  componentDidMount() {
    Request.post('v2/medium/hot').then( res => {
      this.contents = res.content;
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
