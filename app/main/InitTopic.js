/**
 * 启动时选择主题站
 *
 * @author renzhenguo<435328801@qq.com>
 */
import React from 'react';
import { SafeAreaView } from 'react-navigation';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Request from '../resource/function/Request';

export default class InitTopic extends React.Component {

  constructor(props) {
    super(props);
    this.state = { topics: []};
  }

  componentDidMount() {
    Request.post('/api/topic/recommend').then( res => {
      this.setState({ topics: res.list });
    }).catch( err => {
    });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <Text style={ styles.title } >
          请关注你感兴趣的主题
        </Text>
        <Text style={ styles.desc } >
          关注后，相关优质内容将推荐给你
        </Text>

        <FlatList
          numColumns={ 3 }
          initialNumToRender={ 60 }
          style={ styles.topicList }
          columnWrapperStyle={ styles.topicWrapper }
          data={ this.state.topics }
          renderItem={ ({item}) => this._topicItem(item) }
          keyExtractor={ (item) => { return item.id; }}
        />

      </SafeAreaView>
    );
  }

  // 处理单个主题站的显示
  _topicItem(item) {
    return <SafeAreaView style={ styles.topicItem }>
      <TouchableOpacity>
        <Image
          source={{ uri: item.topicIcon }} 
          style={ styles.topicItemImage }
        />
        <Text style={ styles.topicItemText } >{ item.topicName }</Text>
      </TouchableOpacity>
    </SafeAreaView>
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#333333',
    fontSize: 21,
    textAlign: 'center',
    marginTop: 50,
  },
  desc: {
    color: '#a6abb2',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  topicList: {
    marginTop: 30,
  },
  topicWrapper: {
    justifyContent: 'center',
    paddingBottom: 18,
  },
  topicItem: {
    width: 80,
    marginLeft: 11,
    marginRight: 11,
    height: 119,
  },
  topicItemImage: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  topicItemText: {
    color: '#2c2c2c',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 6,
  },
});
