import { Component } from 'react';
import {
    AppRegistry,
    NavigatorIOS,
} from 'react-native';

// 引入外部文件
import StartPage from './app/main/StartPage';

export default class Kejian extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          title:'刻间',
          component:StartPage
        }}
        style={{flex: 1}}
        navigationBarHidden={true}
        shadowHidden={true}
      />
    );
  }
}

AppRegistry.registerComponent('KejianApp', () => Kejian);
