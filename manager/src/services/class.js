import request from '../utils/request';

//获取所有的考试类型
export function mangerRoomGet() {
  return request({
    url: '/manger/room',
    method:'GET'
  })
}


export function mangerGradeGet(params) {
  return request({
    url: '/manger/grade',
    method:'POST',
    data:params
  })
}

export function mangerGradGet() {
  return request({
    url: '/manger/grade',
    method:'GET'
  })
}


export function getGradeDatas(){
  return request({
      url:'/manger/grade',
      method:'GET'
  })
}