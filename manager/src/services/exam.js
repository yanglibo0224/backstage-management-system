import request from '../utils/request';

export function examTypea(params) {
  return request({
    url: '/exam/examType',
    method:'GET'
  })
}

export function subjectType(params) {
  return request({
    url: '/exam/subject',
    method:'GET'
  })
}
