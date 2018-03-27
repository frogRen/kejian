/**
 * 列表内容展示view
 *
 * @author renzhenguo<435328801@qq.com>
 */
import React from 'react';
import { StyleSheet, Dimensions, View, Image, Text } from 'react-native';

export default class ListView extends React.PureComponent {
  render() {
    const data = this.props.data;

    if (!data.content) { return (null); }

    if (data.type === 'text') {
      return (this._getText(data.content));
    }
    if (data.type === 'images') {
      return (this._getImages(data.content));
    }
    if (data.type === 'graphic') {
      if (data.content.cover.url) {
        return (this._getGraphic(data.content));
      }
      return (this._getText(data.content));
    }

    return (null);
  }

  // 处理纯文本
  _getText (content) {
    return <View>
      <Text style={ styles.textTitle }> { content.title } </Text>
      <Text style={ styles.textTitle }> { content.text } </Text>
    </View>
  }

  // 处理图文
  _getGraphic (content) {
    return <View style={ styles.graphicView }>
      <Image
        source={{ uri: content.cover.url }}
        style={ styles.graphicImage }
      />
      <View style={ styles.graphicRight }>
        <Text style={ styles.graphicTitle }>{ content.title }</Text>
        <Text style={ styles.graphicDesc }>
          { (content.desc.length > 36) ? content.desc.slice(0, 36) + '...' : content.desc }
        </Text>
      </View>
    </View>
  }

  // 处理图片
  _getImages (content) {
    return <View>
      <Text style={ styles.textTitle }> { content.title } </Text>
      <View>
        { content.images.map( (image, i) => this._renderImages(image, i)) }
      </View>
    </View>
  }
  _renderImages(image, i) {
    return <Image
      key={ i }
      style={{ flex: 1, width: 100, height: 100 }}
      source={{ uri: image.url }}
      resizeMode={'contain'}
    />
  }

}

// 样式
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  textTitle: {
    fontSize: 16,
    color: '#333',
  },
  graphicView: {
    flexDirection: 'row',
  },
  graphicImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 15,
    flex: 1,
  },
  graphicRight: {
    flex: 2,
  },
  graphicTitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    fontWeight: "bold",
  },
  graphicDesc: {
    fontSize: 12,
    color: '#b2b2b2',
  },
});
