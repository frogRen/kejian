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

// 主界面
import AppMain from './Main';

export default class StartPage extends Component {
  // 组件加载完成
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.navigator.resetTo({
        component: AppMain
      })
    }, 2000)
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

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
    width: width,
    height: height,
  }
});
