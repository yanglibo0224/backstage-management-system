import { login, userInfo, getViewAuthory } from '../services';
import { setToken, getToken, removeToken} from '../utils/user';
import { routerRedux } from 'dva/router';
import allView from './router/config.js'; //引入路由表

export default {
  // 命名空间
  namespace: 'user',

  // 模块内部的状态
  state: {
    isLogin: 0,
    userInfoData: {},
    viewAuthoryList: [], //用户所有的视图权限
    myView: [], //拥有权限访问的路由
    forbiddenView: [] //没有权限访问的路由
  },

  // 订阅路由跳转
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        // console.log('pathname...', pathname);
        //1.判断去的页面是否是登陆页面 
        if (pathname.indexOf('/login') === -1) {
          // 1.1判断是否有登陆态,不去登陆页面做token检测
          if (!getToken()) {
            // 1.1.1没有登陆态,利用redux做路由跳转
            dispatch(routerRedux.replace({
              pathname: `/login`,
              search: `?redirect=${encodeURIComponent(pathname)}`
            }))
          } else {
            //1.1.2有登陆态,请求用户信息，请求用户权限
            dispatch({
              type: 'userInfo'
            })
          }
          //1.2用户没有登陆态
        } else {
          // 1.2.1去登陆页面，如果已登陆跳回首页
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
    },
    *userInfo({ payload }, { call, put, select }) {
      //1.获取当前路由表
      let myView = yield select(state => state.user.myView);
      console.log('myview...', myView);
      //判断是否有权限信息
      if (myView.length) {
        return;
      }
      //2.获取用户信息
      let getUserInfo = yield call(userInfo);
      console.log('userInfo', getUserInfo);
      yield put({
        type: 'getUserInfo',
        payload: getUserInfo.data
      })
      //3.根据id获取视图权限
      let viewAuthory = yield call(getViewAuthory, getUserInfo.data.user_id)
      console.log('view...', viewAuthory);
      yield put({
        type: 'getViewAuthory',
        payload: viewAuthory.data
      })
    }
  },

  // 同步操作
  reducers: {
    updateLogin(state, { payload }) {
      return { ...state, isLogin: payload }
    },
    getUserInfo(state, { payload }) {
      return { ...state, userInfoData: payload }
    },
    getViewAuthory(state, { payload }) {
      //筛选出所有的前端路由权限
      let myView = allView.routes,
        forbiddenView = [];
      myView.forEach(item => {
        item.children = item.children.filter(value => {
          if (payload.findIndex(id => id.view_id === value.id) !== -1) {
            return true;
          } else {
            forbiddenView.push(value.path);
            return false;
          }
        })
      })
      return { ...state, viewAuthoryList: payload, myView, forbiddenView }
    },
    //退出登陆
    logout(state){
      //1.清除登陆态
      removeToken();
      //2.清除权限
      return {...state,userInfo:{},myView:[],forbiddenView:[],viewAuthoryList:[]}
    }
  }
};
