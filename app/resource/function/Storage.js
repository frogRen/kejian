/**
 * 存储
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
  save (key, value, expires) {

    if (expires !== null) {
      let now = new Date().getTime();
      expires = now + expires;
    }

    let data = {
      data: value,
      expires: expires,
    }

    this._cache[key] = data;
    data = JSON.stringify(data);

    return AsyncStorage.setItem(key, data);
  },

  /**
   * 获取数据
   *
   * @param string key 存储数据的key
   * @return Promise
   */
  get (key) {
    return new Promise( (resolve, reject) => {

      // cache
      let value = this._cache[key];
      if (value !== undefined) {
        value = this._genGet(value);
        return resolve(value);
      }

      // storage
      AsyncStorage.getItem(key).then( value => {
        if (value === null) {
          return resolve(value);
        }

        value = JSON.parse(value);
        value = this._genGet(value);
        return resolve(value);
      }).catch(reject);

    });
  },

  // 处理数据
  _genGet (value, resolve) {
    let data = value.data;

    let now = new Date().getTime();
    if (value.expires !== null && value.expires <= now) {
      data = null;
    }

    return data;
  },

  /**
   * 设置本地存放的主题站
   */
  saveTopic (data) {
    return this.save('main_topic', data);
  },

  /**
   * 获取本地存放的主题站
   *
   * @param type 需要数据的类型,string、array
   */
  getTopic: async function (type) {
    let key = 'main_topic';
    let data = await this.get(key) || [];

    if (type === 'string') {
      return data.join(',');
    }
    return data;
  },
}
