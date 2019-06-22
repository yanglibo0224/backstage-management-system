import { login, userInfo, getViewAuthory } from '../services';
import { setToken, getToken } from '../utils/user';
import { routerRedux } from 'dva/router';

export default {
  // 命名空间
  namespace: 'user',

  // 模块内部的状态
  state: {
    isLogin: 0,
    userInfoData: {}
  },

  // 订阅路由跳转
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        // console.log('pathname...', pathname);
        if (pathname.indexOf('/login') === -1) {
          // 不去登陆页面做token检测
          if (!getToken()) {
            // 利用redux做路由跳转
            dispatch(routerRedux.replace({
              pathname: `/login`,
              search: `?redirect=${encodeURIComponent(pathname)}`
            }))
          }
        } else {
          // 去登陆页面，如果已登陆跳回首页
          if (getToken()) {
            // 利用redux做路由跳转
            dispatch(routerRedux.replace({
              pathname: '/',
            }))
          }
        }
      });
    },
  },

  // 异步操作
  effects: {
    *login({ payload }, { call, put }) {
      console.log('payload...', payload, login);
      //1.调用登录接口
      let data = yield call(login, payload);
      console.log('data...', data);
      //2.设置登录态到cookie里
      if (data.code === 1) {
        setToken(data.token)
      }
      //3.更新redux重登陆状态
      yield put({
        type: 'updateLogin',
        payload: data.code === 1 ? 1 : -1
      })
      //4.获取用户信息
      // let getUserInfo = yield call(userInfo);
      // console.log('userInfo', getUserInfo);
      //5.根据id获取视图权限
      // let viewAuthory = yield call(getViewAuthory, userInfo.data.user_id)
      // console.log(viewAuthory);
    },
    *userInfo({ payload }, { call, put }) {
      let data = yield call(userInfo);
      console.log(data);
      yield put({
        type: 'getUserInfo',
        action: data.data
      });
    }
  },

  // 同步操作
  reducers: {
    updateLogin(state, { payload }) {
      return { ...state, isLogin: payload }
    },
    getUserInfo(state, { action }) {
      return { ...state, userInfoData: action }
    }
  }
};
