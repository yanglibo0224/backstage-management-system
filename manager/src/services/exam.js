import request from '../utils/request';

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
// /exam/insertQuestionsType
export function insertQuestionsType(params){
  return request({
      url:'/exam/insertQuestionsType',
      method:'POST',
      data: params
  })
}
//获取所有试题
export function getQuestions(){
  return request({
      url:'/exam/questions/new',
      method:'GET'
  })
}

// getQuestion条件获取试题
export function getQuestion(params){
  return request({
      url:'/exam/questions/condition',
      method:'GET',
      params:params
  })
}