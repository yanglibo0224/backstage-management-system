import {mangerRoomGet,mangerGradeGet,mangerGradGet} from '../services'

export default {
  // 命名空间
  namespace: 'class',

  // 模块内部的状态
  state: {
    mangerRoomList:[],
    mangerGradeList:0,
    mangerGradList:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 异步操作
  effects: {
    //获取身份信息
    *mangerRoom({ payload }, { call, put }) {
      // console.log('payload...',payload)
      let data = yield call(mangerRoomGet)
      console.log('add..data...', data)
      yield put({
        type: 'usermangerRoom',
        action: data.data
      });
    },
    // mangerGrade 添加班级
    *mangerGrade({ payload }, { call, put }) {
      // console.log('payload...',payload)
      let data = yield call(mangerGradeGet,payload)
      // console.log('add..data...', data)
      yield put({
        type: 'usermangerGrade',
        action:data.code === 1 ? 1 : -1
      });
    },
    *mangerGrad({  }, { call, put }) {
      let data = yield call(mangerGradGet);
      console.log('add..data...', data)
      yield put({
        type: 'usermangerGrad',
        action:data.data
      });
    }
  },

  // 同步操作
  reducers: {
    //获取身份信息
    usermangerRoom(state, { action }) {
      return {
        ...state,
        mangerRoomList: action
      };
    },
    usermangerGrade(state, { action }) {
      return {
        ...state,
        mangerGradeList: action
      };
    },
    usermangerGrad(state, { action }) {
      return {
        ...state,
        mangerGradList: action
      };
    }
  },
};
