import request from '../utils/request';

//获取所有的考试类型
export function examTypea() {
  return request({
    url: '/exam/examType',
    method:'GET'
  })
}

// 添加试题
export function add(params){
  return request({
      url:'/exam/questions',
      method:'POST',
      data: params
  })
}

//获取所有试题类型
export function subjectTypea() {
  return request({
    url: '/exam/subject',
    method:'GET'
  })
}

//获取所有考试类型
export function getQuestionsTypea() {
  return request({
    url: '/exam/getQuestionsType',
    method:'GET'
  })
}