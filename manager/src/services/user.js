
import requset from '../utils/request'

//登陆接口

export function login(params){
  console.log(params)
  return requset({
    url: '/user/login',
    method: 'POST',
    data: params
  })
}