/**
 * 网络请求
 */
import axios from 'axios';

export default {

  // 接口地址前缀
  //_newsApi: 'http://app-news.router.test.imoxiu.cn',
  _newsApi: 'https://news.moxiu.com',

  /**
   * 发送请求
   *
   * @param string url 请求地址,不带前缀的
   * @param map data 请求参数
   * @param map options 其他网络配置参数
   */
  post (url, data = {}, options = {}) {

    options.baseURL = this._newsApi;
    options.params = this._cquery();
    options.timeout = options.timeout || 5000;

    data = this._query(data);

    return new Promise( (resolve, reject) => {
      axios.post(url, data, options).then( res => {
        res = this._response(res);
        resolve(res);
      }).catch(reject);
    });
  },

  get (url, data = {}, options = {}) {

    options.baseURL = this._newsApi;
    options.params = this._cquery(data);
    options.timeout = options.timeout || 5000;

    return new Promise( (resolve, reject) => {
      axios.get(url, options).then( res => {
        res = this._response(res);
        resolve(res);
      }).catch(reject);
    });
  },

  /**
   * 处理返回数据
   */
  _response (data) {
    data = data.data;
    if (typeof data !== 'object') {
      throw '网络请求失败,请检查网络连接';
    }
    if (data.code === 200) {
      return data.data;
    }
    throw data.message || '服务器异常,请稍后再试';
  },

  /**
   * 公共请求参数
   */
  _cquery (obj = {}) {
    let timestamp = parseInt(new Date().getTime() / 1000);

    obj.timestamp = timestamp;
    obj.mobileInfo = '{}';
    obj.from = 'ios1.0';
    return obj;
  },

  /**
   * 请求参数处理
   */
  _query (obj, arr = []) {
    for (let item in obj) {
      arr.push(item + '=' + obj[item]);
    }
    return arr.join('&');
  },

}
