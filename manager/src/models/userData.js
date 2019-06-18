import { getUserData, getUseridentity, getApiauthority, getIdApi, getViewAuthority, getIdview } from '../services';

export default {
  // 命名空间
  namespace: 'userData',

  // 模块内部的状态
  state: {
    userdataList: [],
    userIdentityList: [],
    apiauthorityList: [],
    idApiList: [],
    viewAuthorityList: [],
    idviewList: []
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
    //身份数据
    *getUseridentitys({ }, { call, put }) {
      let data = yield call(getUseridentity);
      // console.log(data);
      yield put({
        type: 'useridentity',
        action: data.data
      })
    },
    //api接口权限
    *getApiauthoritys({ }, { call, put }) {
      let data = yield call(getApiauthority);
      console.log(data);
      yield put({
        type: 'apiauthority',
        action: data.data
      })
    },
    //身份和api接口权限
    *getIdApis({ }, { call, put }) {
      let data = yield call(getIdApi);
      yield put({
        type: 'idApi',
        action: data.data
      })
    },
    //s视图接口权限
    *getViewAuthoritys({ }, { call, put }) {
      let data = yield call(getViewAuthority);
      yield put({
        type: 'viewAuthority',
        action: data.data
      })
    },
    //身份和视图权限关系
    *getIdviews({ }, { call, put }) {
      let data = yield call(getIdview);
      yield put({
        type: 'idview',
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
    },
    viewAuthority(state, { action }) {
      return {
        ...state,
        viewAuthorityList: action
      }
    },
    idview(state, { action }) {
      return {
        ...state,
        idviewList: action
      }
    }
  }
};
