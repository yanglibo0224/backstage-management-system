
import {userAdd ,userGet,userAddthe,userAddapi,relationGet,AddeditGet,setIdentityViewGet,authorityGet,setIdentityApiGet} from '../services'

export default {
  // 命名空间
  namespace: 'adduser',

  // 模块内部的状态
  state: {
    //添加用户
    UserAddList:0,
    UserGetList:[],
    UserAddThes:0,
    UserAddapis:0,
    relationGetList:[]
    ,userAddeditList:0,
    authorityGetList:[],
    setIdentityApiGetList:0,
    setIdentityViewList:0
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
    },
    //添加身份
    *Addthe({ payload }, { call, put }) {
      // console.log('payload...',payload)
      let data = yield call(userAddthe, payload)
      console.log('add..data...', data)
      yield put({
        type: 'Addthea',
        action: data.code === 1 ? 1 : -1
      });
    }
    ,
    //添加api
    *Addapi({ payload }, { call, put }) {
      // console.log('payload...',payload)
      let data = yield call(userAddapi, payload)
      console.log('add..data...', data)
      yield put({
        type: 'Addapia',
        action: data.code === 1 ? 1 : -1
      });
    },
    // 获取视图
    *relation({ payload }, { call, put }) {
      // console.log('payload...',payload)
      let data = yield call(relationGet)
      console.log('add..data...', data)
      yield put({
        type: 'userrelation',
        action: data.data
      });
    },
    //添加视图权限
    *Addedita({ payload }, { call, put }) {
      // console.log('payload...',payload)
      let data = yield call(AddeditGet,payload)
      console.log('add..data...', data)
      yield put({
        type: 'userAddedit',
        action: data.code === 1 ? 1 : -1
      });
    },
    //authority 获取api接口权限
    *authority({ payload }, { call, put }) {
      // console.log('payload...',payload)
      let data = yield call(authorityGet)
      console.log('add..data...', data)
      yield put({
        type: 'userauthority',
        action: data.data
      });
    },
    //给身份添加接口权限
    *setIdentityApi({ payload }, { call, put }) {
      // console.log('payload...',payload)
      let data = yield call(setIdentityApiGet,payload)
      console.log('add..data...', data)
      yield put({
        type: 'usersetIdentityApi',
        action: data.code === 1 ? 1 : -1
      });
    },
     
     *setIdentityView({ payload }, { call, put }) {
      // console.log('payload...',payload)
      let data = yield call(setIdentityViewGet,payload)
      console.log('add..data...', data)
      yield put({
        type: 'usersetIdentityView',
        action: data.code === 1 ? 1 : -1
      });
    },
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
    },//添加身份
    Addthea(state, { action }) {
      return {
        ...state,
        UserAddThes: action
      };
    },//获取视图
    userrelation(state, { action }) {
      return {
        ...state,
        relationGetList: action
      };
    },
    userAddedit(state, { action }) {
      return {
        ...state,
        userAddeditList: action
      };
    },
    //authorityGetList
    userauthority(state, { action }) {
      return {
        ...state,
        authorityGetList: action
      };
    },
    usersetIdentityApi(state, { action }) {
      return {
        ...state,
        setIdentityApiGetList: action
      };
    },
    usersetIdentityView(state, { action }) {
      return {
        ...state,
        setIdentityViewList: action
      };
    },
  },
};
