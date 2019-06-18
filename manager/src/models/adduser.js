
import {userAdd ,userGet} from '../services'

export default {
  // 命名空间
  namespace: 'adduser',

  // 模块内部的状态
  state: {
    //添加用户
    UserAddList:0,
    UserGetList:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 异步操作
  effects: {
    //添加用户
    *Adduser({ payload }, { call, put }) {
      // console.log('payload...',payload)
      let data = yield call(userAdd, payload)
      console.log('add..data...', data)
      yield put({
        type: 'userAdd',
        action: data.code === 1 ? 1 : -1
      });
    },
    //获取身份信息
    *getUsera({ payload }, { call, put }) {
      // console.log('payload...',payload)
      let data = yield call(userGet)
      console.log('add..data...', data)
      yield put({
        type: 'userGets',
        action: data.data
      });
    }
  },

  // 同步操作
  reducers: {
    //添加用户
    userAdd(state, { action }) {
      return {
        ...state,
        UserAddList: action
      };
    },
    //获取身份信息
    userGets(state, { action }) {
      return {
        ...state,
        UserGetList: action
      };
    }
  },
};
