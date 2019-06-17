import { getUserData, getUseridentity, getApiauthority, getIdApi } from '../services';

export default {
  // 命名空间
  namespace: 'userData',

  // 模块内部的状态
  state: {
    userdataList: [],
    userIdentityList: [],
    apiauthorityList: [],
    idApiList: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 异步操作
  effects: {
    // 用户数据
    *getUserDatas({ }, { call, put }) {
      let data = yield call(getUserData);
      // console.log(data.data);
      yield put({
        type: 'userdata',
        action: data.data
      })
    },
    *getUseridentitys({ }, { call, put }) {
      let data = yield call(getUseridentity);
      // console.log(data);
      yield put({
        type: 'useridentity',
        action: data.data
      })
    },
    *getApiauthoritys({ }, { call, put }) {
      let data = yield call(getApiauthority);
      console.log(data);
      yield put({
        type: 'apiauthority',
        action: data.data
      })
    },
    *getIdApis({ }, { call, put }) {
      let data = yield call(getIdApi);
      console.log(data);
      yield put({
        type: 'idApi',
        action: data.data
      })
    }
  },

  // 同步操作
  reducers: {
    userdata(state, { action }) {
      return {
        ...state,
        userdataList: action
      }
    },
    useridentity(state, { action }) {
      return {
        ...state,
        userIdentityList: action
      }
    },
    apiauthority(state, { action }) {
      return {
        ...state,
        apiauthorityList: action
      }
    },
    idApi(state, { action }) {
      return {
        ...state,
        idApiList: action
      }
    }
  }
};
