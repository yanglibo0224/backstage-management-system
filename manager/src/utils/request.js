import axios from 'axios';
import {getToken} from './user';
const service = axios.create({
  baseURL: 'http://169.254.22.72:7001/',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    //判断是否有登录态
    if (getToken()) {
      //让每个请求携带authorization
      config.headers['authorization'] = getToken();
    }
    return config;
  },
  error=>{
    return Promise.reject(error);
  }
)

service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)

export default service;