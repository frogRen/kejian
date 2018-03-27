/**
 * 日期时间格式化
 *
 * @author renzhenguo<435328801@qq.com>
 */
import moment from 'moment';
import zhCn from 'moment/locale/zh-cn'

export default {

  /**
   * 距离当前的时间
   */
  fromNow (time) {
    return moment(time).fromNow();
  },

}
