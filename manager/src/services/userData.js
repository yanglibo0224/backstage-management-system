import request from '../utils/request';

// 展示用户数据
export function getUserData() {
  return request({
    url: '/user/user',
    method: 'GET'
  })
}

// 展示身份数据
export function getUseridentity() {
  return request({
    url: '/user/identity',
    method: 'GET'
  })
}

//展示api接口权限数据
export function getApiauthority() {
  return request({
    url: '/user/api_authority',
    method: 'GET'
  })
}

//展示身份和api权限关系
export function getIdApi() {
  return request({
    url: '/user/identity_api_authority_relation',
    method: 'GET'
  })
}