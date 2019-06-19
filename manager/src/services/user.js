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

//添加身份
export function userAddthe(params){
  return request({
      url:'/user/identity/edit',
      method:'GET',
      params
  })
}
//添加api
export function userAddapi(params){
  return request({
      url:'/user/authorityApi/edit',
      method:'GET',
      params
  })
}
//relationGet
export function relationGet(params){
  return request({
      url:'/user/identity_view_authority_relation',
      method:'GET'
  })
}

//添加视图
export function AddeditGet(params){
  return request({
      url:'/user/authorityView/edit',
      method:'GET',
      params
  })
}
//获取api接口权限
export function authorityGet(params){
  return request({
      url:'/user/api_authority',
      method:'GET'
  })
}

export function setIdentityApiGet(params){
  return request({
      url:'/user/setIdentityApi',
      method:'POST',
      data:params
  })
}
// setIdentityViewGet
export function setIdentityViewGet(params){
  return request({
      url:'/user/setIdentityView',
      method:'POST',
      data:params
  })
}
