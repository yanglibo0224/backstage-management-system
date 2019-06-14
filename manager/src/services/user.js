import request from '../utils/request';

// 登陆接口
export function login(params) {
  return request({
    url: '/user/login',
    method: 'POST',
    data: params
  })
}

//获取用户信息
export function userInfo(params){
  return request({
      url:'/user/userInfo',
      method:'GET'
  })
}
