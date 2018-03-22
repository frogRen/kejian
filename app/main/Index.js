/**
 * 主入口
 *
 * 完成导航配置、初始化逻辑等
 *
 * @author renzhenguo<435328801@qq.com>
 */
import { StackNavigator } from 'react-navigation';

// 导航组件
import StartPage from './StartPage';
import InitTopic from './InitTopic';
import AppMain from './AppMain';

export default StackNavigator ({
  appMain: { screen: AppMain },
  startPage: { screen: StartPage },
  initTopic: { screen: InitTopic },
}, {
  initialRouteName: 'startPage',
  headerMode: 'none',
});
