/**
 * 列表内容展示view
 *
 * @author renzhenguo<435328801@qq.com>
 */
import React from 'react';
import { StyleSheet, Dimensions, View, Image, Text } from 'react-native';

export default class CardContentView extends React.PureComponent {

  render() {
    const data = this.props.data;

    if (!data.content) { return (null); }

    switch (data.type) {
      case 'text':
        return (this._getText(data.content));
      case 'images':
        return (this._getImages(data.content));
      case 'punchline':
        return (this._getPunchline(data.content));
      case 'video':
        return (this._getVideo(data.content));
      case 'graphic':
        if (data.content.cover.url) {
          return (this._getGraphic(data.content));
        }
        return (this._getText(data.content));
      default:
        return (
          <Text style={ styles.errorDesc }>[未知内容]</Text>
        );
    }
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
    let imageStyle = this._getImageStyle(content.images);

    return <View>
      <Text style={ styles.textTitle }> { content.desc } </Text>
      <View style={ styles.imagesView }>
        { content.images.map(
          (image, i) => <Image key={i} style={imageStyle} source={{ uri: image.url }} />
        ) }
      </View>
    </View>
  }
  _getImageStyle (images) {
    if (images.length > 1) {
      return styles.imagesImage;
    }
    let info = images[0].info;
    let imageW = (info.width > info.height) ? width * 0.6 : width / 2.8;
    return {
      width: imageW,
      height: imageW * info.height / info.width,
    }
  }

  // 处理视频
  _getVideo (content) {
    return <View>
      <Text style={ styles.textTitle }> { content.desc } </Text>
      <Text style={ styles.errorDesc }> [暂不支持播放视频] </Text>
    </View>
  }

  // 处理punchline
  _getPunchline (content) {
    return <View style={ styles.punchlineView }>
      <Image
        style={ styles.punchlineImage } 
        source={{ uri: content.cover.url }}
      />
      <View style={ styles.punchlineShade }></View>
      <Text style={ styles.punchlineText }> { content.desc } </Text>
    </View>
  }

}

// 样式
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  textTitle: {
    color: '#333',
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 8,
  },
  graphicView: {
    flexDirection: 'row',
    marginBottom: 8,
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
    color: '#333',
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 22,
    marginBottom: 16,
  },
  graphicDesc: {
    color: '#b2b2b2',
    fontSize: 12,
    lineHeight: 15,
  },
  imagesView: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imagesImage: {
    width: (100 / 3 - 2) + '%',
    height: width * 0.3,
    marginRight: '2%',
    marginBottom: 8,
    resizeMode: 'cover',
  },
  punchlineView: {
    width: '100%',
    height: 260,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  punchlineImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  punchlineShade: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  punchlineText: {
    position: 'absolute',
    color: '#fff',
    fontSize: 20,
  },
  errorDesc: {
    color: '#b2b2b2',
    fontSize: 12,
  },
});
