import request from '../utils/request';

// 登陆接口
export function login(params) {
  return request({
    url: '/user/login',
    method: 'POST',
    data: params
  })
}

//添加试题
export function addQuestion() {
  return request({
    url: '/exam/question',
    method: 'POST',
    data: ''
  })
}