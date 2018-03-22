/**
 * 启动页
 *
 * 完成启动界面展示,根据数据选择跳转等
 *
 * @author renzhenguo<435328801@qq.com>
 */
import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import Storage from '../resource/function/Storage';
import Config from './Config';

export default class StartPage extends React.Component {

  // 根据是否选择主题站进行跳转
  componentDidMount() {
    Storage
      .get(Config.main.stopicKey)
      .then(data => {
        let name = (data) ? 'appMain' : 'initTopic';

        this.timer = setTimeout( () => {
          this.props.navigation.navigate(name, { stopic: data });
        }, 2000)
      });
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <Image
        source={require('../resource/image/main_startpage.png')}
        style={styles.imageStyle}
      />
    );
  }
}

// 开屏图片的尺寸
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  imageStyle: {
    width: width,
    height: height,
  }
});
