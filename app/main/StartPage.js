/**
 * 开屏启动页
 */
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Image, Dimensions } from 'react-native';

// 主界面
import AppMain from './App';

// 启动界面
class HomeScreen extends React.Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.navigation.navigate('home')
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
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  imageStyle: {
    width: width,
    height: height,
  }
});

// 导航配置
export default StackNavigator({
  start: { screen: HomeScreen },
  home: { screen: AppMain },
}, {
  initialRouteName: 'start',
  headerMode: 'none',
});
