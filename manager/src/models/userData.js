import { getUserData } from '../services';

export default {
  // 命名空间
  namespace: 'userData',

  // 模块内部的状态
  state: {
    userData: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 异步操作
  effects: {
    // 用户数据
    *getUserData({ payload }, { call, put }) {
      let data = yield call(getUserData);
      console.log('userdata--'+data);
      yield put({
        type: 'getUserData',
        action: data
      })
    }
  },

  // 同步操作
  reducers: {
    getUserData(state, { action }) {
      return {
        ...state,
        getUserData: action
      }
    }
  }
};
