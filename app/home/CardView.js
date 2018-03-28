/**
 * 列表卡展示view
 *
 * @author renzhenguo<435328801@qq.com>
 */
import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import FormatDate from '../resource/function/FormatDate';
import CardContentView from './CardContentView';

export default class CardView extends React.PureComponent {
  render() {
    const data = this.props.data;

    return (
      <View style={ styles.cardView }>

        { this._getHeader(data) }

        {/* 内容部分 */}
        <CardContentView data={data} />

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
      <View style={ styles.headerFollow }>
        <Text style={ styles.headerFollowIcon }>+</Text>
        <Text style={ styles.headerFollowText }>关注</Text>
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
  cardView: {
    padding: 15,
  },
  headerView: {
    flexDirection: 'row',
    height: 32,
    marginBottom: 16,
  },
  headerIcon: {
    width: 32,
    height: 32,
    borderRadius: 5,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 14,
    color: '#81b7ec',
    marginBottom: 6,
  },
  headerDesc: {
    fontSize: 10,
    color: '#b2b2b2',
  },
  headerFollow: {
    width: 46,
    height: 24,
    position: 'absolute',
    right: 0,
    borderWidth: 1,
    borderColor: '#b8bcc2',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerFollowIcon: {
    fontSize: 16,
    color: '#b2b2b2',
    marginTop: -2,
    marginRight: 4,
  },
  headerFollowText: {
    fontSize: 10,
    color: '#b2b2b2',
  },
  footerView: {
    height: 44,
    marginBottom: -15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  footerShare: {
    width: 16,
    height: 16,
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
