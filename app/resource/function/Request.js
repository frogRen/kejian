/**
 * 网络请求
 *
 * @author renzhenguo<435328801@qq.com>
 */
import axios from 'axios';
import Config from '../../main/Config';
import HmacSHA1 from 'crypto-js/hmac-sha1';
import Base64 from 'crypto-js/enc-base64';

export default {

  /**
   * 发送请求
   *
   * @param string url 请求地址,不带前缀的
   * @param map data 请求参数
   * @param map options 其他网络配置参数
   * @return Promise
   */
  post: async function (url, data = {}, options = {}) {

    // 处理参数
    options.baseURL = Config.network.newsApi;
    options.params = this._cquery();
    options.timeout = options.timeout || 5000;

    data.sign = this._sign(data);
    data = this._query(data);

    // 处理请求返回
    let res = {};
    try {
      res = await axios.post(url, data, options);
      return this._response(res);
    } catch (err) {
      this._throw(res, err);
    }
  },
  get: async function (url, data = {}, options = {}) {

    // 处理参数
    options.baseURL = Config.network.newsApi;
    options.params = this._cquery(data);
    options.timeout = options.timeout || 5000;

    // 处理请求返回
    let res = {};
    try {
      res = await axios.get(url, options);
      return this._response(res);
    } catch (err) {
      this._throw(res, err);
    }
  },

  // 处理返回数据
  _response (data) {
    data = data.data;

    if (typeof data === 'object' && data.code === 200) {
      return data.data;
    }

    throw (typeof data === 'object') ? data : {};
  },
  // 处理错误返回信息
  _throw (res, err) {
    throw {
      'status': res.status,
      'code': err.code || 500,
      'message': err.message || '网络请求失败,请检查网络连接',
    }
  },

  // 公共请求参数
  _cquery (obj = {}) {
    let timestamp = parseInt(new Date().getTime() / 1000);

    obj.nonce = 1;
    obj.timestamp = timestamp;
    obj.mobileInfo = '{}';
    return obj;
  },
  // 处理签名参数
  _sign (obj) {
    let params = [];
    Object.keys(obj).sort().forEach( (key) => {
      params.push(key + '=' + obj[key]);
    });
    params = params.join('&');

    return Base64.stringify(HmacSHA1(params, Config.network.newsKey));
  },
  // 请求参数格式处理
  _query (obj, arr = []) {
    for (let item in obj) {
      arr.push(item + '=' + encodeURIComponent(obj[item]));
    }
    return arr.join('&');
  },

}
