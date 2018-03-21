/**
 * 开屏启动页
 */
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Image, Dimensions } from 'react-native';
import Storage from '../resource/function/Storage';
import AppMain from './App';
import InitTopic from './InitTopic';

class HomeScreen extends React.Component {
  componentDidMount() {

    // 根据是否选择主题站进行跳转
    let name = 'home';
    let topic = Storage.getTopic();
    if (topic.length < 1) {
      name = 'initTopic';
    }

    this.timer = setTimeout(() => {
      this.props.navigation.navigate(name);
    }, 2000)
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

// 屏幕尺寸大小
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  imageStyle: {
    width: width,
    height: height,
  }
});

// 导航配置
export default StackNavigator ({
  start: { screen: HomeScreen },
  home: { screen: AppMain },
  initTopic: { screen: InitTopic },
}, {
  initialRouteName: 'start',
  headerMode: 'none',
});
