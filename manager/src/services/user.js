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
//添加用户
export function userAdd(params){
  return request({
      url:'/user',
      method:'POST',
      data:params
  })
}

//获取身份信息
export function userGet(params){
  return request({
      url:'/user/identity',
      method:'GET'
  })
}