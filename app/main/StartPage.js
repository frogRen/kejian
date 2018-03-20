/**
 * 开屏启动页
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';

// 获取屏幕尺寸
const {width, height} = Dimensions.get('window');

// 引入外部文件
//import AppMain from './Main';

export default class StartPage extends Component {
  render() {
    return(
      // 启动页
      <Image
        source={require('../resource/image/startpage.png')}
        style={styles.imageStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
    imageStyle: {
        width:width,
        height:height,
    }
});
