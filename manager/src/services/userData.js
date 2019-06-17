import request from '../utils/request';

// 展示用户数据
export function getUserData() {
  return request({
    url: '/user/user',
    method: 'GET'
  })
}