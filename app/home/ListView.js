/**
 * 列表展示view
 *
 * @author renzhenguo<435328801@qq.com>
 */
import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import FormatDate from '../resource/function/FormatDate';
import ListContentView from './ListContentView';

export default class ListView extends React.PureComponent {
  render() {
    const data = this.props.data;

    return (
      <View style={ styles.view }>

        { this._getHeader(data) }

        {/* 内容部分 */}
        <ListContentView data={data} />

        { this._getFooter(data) }

      </View>
    );
  }

  // 头部信息
  _getHeader (data) {
    return <View style={ styles.headerView }>
      <Image
        source={{ uri: data.topicIcon }}
        style={ styles.headerIcon }
      />
      <View>
        <Text style={ styles.headerTitle }>
          { data.topicName }
        </Text>
        <Text style={ styles.headerDesc}>
          { FormatDate.fromNow(data.ctime) }
        </Text>
      </View>
    </View>
  }

  // 底部
  _getFooter (data) {
    return <View style={ styles.footerView }>
      <Image
        source={require('../resource/image/home_card_like_n.png')}
        style={ styles.footerIcon }
      />
      <Text style={ styles.footerText }>{ data.count.like }</Text>

      <Image
        source={require('../resource/image/home_card_comment_n.png')}
        style={ styles.footerIcon }
      />
      <Text style={ styles.footerText }>{ data.count.comment }</Text>

      <Image
        source={require('../resource/image/home_card_share.png')}
        style={ styles.footerShare }
      />
    </View>
  }
}

// 样式
const styles = StyleSheet.create({
  view: {
    padding: 15,
  },
  headerView: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  headerIcon: {
    width: 32,
    height: 32,
    borderRadius: 5,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 14,
    color: '#81b7ec',
    marginBottom: 5,
  },
  headerDesc: {
    fontSize: 10,
    color: '#b2b2b2',
  },
  footerView: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  footerIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  footerShare: {
    width: 15,
    height: 15,
    position: 'absolute',
    right: 0,
    top: 15,
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    width: 60,
  },
});
