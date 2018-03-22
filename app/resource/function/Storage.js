/**
 * 存储
 *
 * @author renzhenguo<435328801@qq.com>
 */
import { AsyncStorage } from 'react-native';

export default {

  // 内存里的缓存数据
  _cache: {},

  /**
   * 保存数据
   *
   * @param string key 存储数据的key
   * @param map value 存储的数据对象
   * @param int expires 过期时间,毫秒
   * @return Promise
   */
  set (key, value, expires = 0) {

    // 处理数据
    if (expires !== 0) {
      let now = new Date().getTime();
      expires = now + expires;
    }

    let data = {
      data: value,
      expires: expires,
    }

    // 写入缓存
    this._cache[key] = data;
    data = JSON.stringify(data);

    // 写入存储
    key = '@Kejian:' + key;
    return AsyncStorage.setItem(key, data);
  },

  /**
   * 获取数据
   *
   * @param string key 存储数据的key
   * @return Promise
   */
  get: async function (key) {

    // 从缓存获取
    let value = this._cache[key];
    if (value !== undefined) {
      return this._genGetData(value);
    }

    // 从存储获取
    try {
      key = '@Kejian:' + key;
      value = await AsyncStorage.getItem(key);
      value = JSON.parse(value);
      return this._genGetData(value);
    } catch (err) {
      return null;
    }
  },

  // 处理数据
  _genGetData (value) {
    let data = value.data;
    if (value.expires === 0) {
      return data;
    }

    let now = new Date().getTime();
    if (value.expires >= now) {
      return data;
    }

    return null;
  },
}
