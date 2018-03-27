/**
 * 启动时选择主题站
 *
 * @author renzhenguo<435328801@qq.com>
 */
import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';
import Request from '../resource/function/Request';
import Storage from '../resource/function/Storage';
import Config from './Config';

export default class InitTopic extends React.Component {

  constructor(props) {
    super(props);
    this.state = { change: true };

    this.topics = [];
    this.stopicNum = 0;
  }

  // 加载数据
  componentDidMount() {
    Request.post('/api/topic/recommend').then( res => {
      this.topics = res.list;
      this.setState({ change: true });
    }).catch( err => {
      this.refs.toast.show(err.message, 2000);
    });
  }

  render() {
    let button =
    <TouchableOpacity
      style={ [styles.buttonView, (this.stopicNum >= 4) && styles.buttonViewS] }
      onPress={ () => this._topicSelect() }
    >
      <Text style={ styles.buttonText } >
      我选好了 { (this.stopicNum < 4) && '(' + this.stopicNum + '/4)' }
      </Text>
    </TouchableOpacity>
    if (this.topics.length === 0) { button = null; }

    return (
      <SafeAreaView style={ styles.view } >
        <Text style={ styles.title } >
          请关注你感兴趣的主题
        </Text>
        <Text style={ styles.desc } >
          关注后，相关优质内容将推荐给你
        </Text>

        <FlatList
          numColumns={ 3 }
          initialNumToRender={ 90 }
          style={ styles.topicList }
          columnWrapperStyle={ styles.topicWrapper }
          data={ this.topics }
          renderItem={ ({item}) => this._topicItem(item) }
          keyExtractor={ (item) => { return item.id; }}
        />

        { button }
        <Toast ref="toast" position="center" opacity={0.5} />
      </SafeAreaView>
    );
  }

  // 处理单个主题站的显示
  _topicItem(item) {
    let select = <Image
      source={require('../resource/image/main_topic_s.png')}
      style={ styles.topicItemImageS }
    />
    if (!item.select) { select = null; }

    return <SafeAreaView style={ styles.topicItem }>
      <TouchableOpacity activeOpacity={ 1 } onPress={ () => this._topicClick(item) }>
        <Image
          source={{ uri: item.topicIcon }} 
          style={ styles.topicItemImage }
        />
        { select }
        <Text style={ styles.topicItemText } >{ item.topicName }</Text>
      </TouchableOpacity>
    </SafeAreaView>
  }

  // 处理单个主题站点击
  _topicClick(item) {
    let topics = [];
    this.topics.forEach( data => {
      if (data.id === item.id) {
        data.select = !data.select;
        this.stopicNum = (data.select) ?
          this.stopicNum + 1 :
          this.stopicNum - 1;
      }
      topics.push(data);
    });

    this.topics = topics;
    this.setState({ change: true });
  }

  // 处理选择完成
  _topicSelect() {
    if (this.stopicNum < 4) {
      return ;
    }

    let stopic = {};
    this.topics.forEach( data => {
      if (data.select) {
        stopic[data.id] = {'topicName': data.topicName}
      }
    });

    this.props.navigation.navigate('mainApp', { stopic: stopic });
    Storage.set(Config.main.stopicKey, stopic);
  }
}

// 样式
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    color: '#4c5664',
    fontSize: 26,
    marginTop: 50,
  },
  desc: {
    color: '#a6abb2',
    fontSize: 14,
    marginTop: 12,
  },
  topicList: {
    marginTop: 28,
  },
  topicWrapper: {
    height: 130,
  },
  topicItem: {
    width: 80,
    marginLeft: 15,
    marginRight: 15,
  },
  topicItemImage: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  topicItemImageS: {
    width: 80,
    height: 80,
    borderRadius: 6,
    marginTop: -80,
  },
  topicItemText: {
    color: '#2c2c2c',
    textAlign: 'left',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },
  buttonView: {
    width: width - 32,
    height: 42,
    borderRadius: 6,
    marginBottom: 16,
    backgroundColor: '#dcdee1',
  },
  buttonViewS: {
    backgroundColor: '#ffdc50',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 42,
  },
});
