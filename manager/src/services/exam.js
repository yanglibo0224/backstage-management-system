import request from '../utils/request';

export function examTypea() {
  return request({
    url: '/exam/questions/new',
    method:'GET'
  })
}

//获取所有试题类型
export function subjectType() {
  return request({
    url: '/exam/getQuestionsType',
    method:'GET'
  })
}
