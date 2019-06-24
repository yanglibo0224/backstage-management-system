import { mangerRoomGet, mangerGradeGet, getGradeDatas, StudentNewGet, mangerGradGet, mangerGradeupdateGet, roomDeleteGet, mangerdeleteGet, RoomaddGet } from '../services'

export default {
  // 命名空间
  namespace: 'class',

  // 模块内部的状态
  state: {
    mangerRoomList: [],
    mangerGradeList: 0,
    mangerGradList: [],
    mangerGradeupdateList: 0,
    usermangerdeleteList: 0,
    userRoomaddList: 0,
    userroomDeleteList: 0,
    userStudentNewList: [],
    getGradeViewData: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line

    },
  },

  // 异步操作
  effects: {
    *getGradeData({ payload }, { call, put }) {
      let data = yield call(getGradeDatas)
      yield put({
        type: 'getGradeClass',
        action: data.data
      })
    },
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
      let data = yield call(mangerGradeGet, payload)
      // console.log('add..data...', data)
      yield put({
        type: 'usermangerGrade',
        action: data.code === 1 ? 1 : -1
      });
    },
    *mangerGrad({ }, { call, put }) {
      let data = yield call(mangerGradGet);
      console.log('add..data...', data)
      yield put({
        type: 'usermangerGrad',
        action: data.data
      });
    },
    *mangerGradeupdate({ payload }, { call, put }) {
      // console.log('payload...',payload)
      let data = yield call(mangerGradeupdateGet, payload)
      // console.log('add..data...', data)
      yield put({
        type: 'usermangerGradeupdate',
        action: data.code === 1 ? 1 : -1
      });
    },
    *mangerdelete({ payload }, { call, put }) {
      // console.log('payload...',payload)
      let data = yield call(mangerdeleteGet, payload)
      // console.log('add..data...', data)
      yield put({
        type: 'usermangerdelete',
        action: data.code === 1 ? 1 : -1
      });
    },
    *Roomadd({ payload }, { call, put }) {
      // console.log('payload...',payload)
      let data = yield call(RoomaddGet, payload)
      console.log('add..data...', data)
      yield put({
        type: 'userRoomadd',
        action: data.code === 1 ? 1 : -1
      });
    },
    *roomDelete({ payload }, { call, put }) {
      // console.log('payload...',payload)
      let data = yield call(roomDeleteGet, payload)
      console.log('add..data...', data)
      yield put({
        type: 'userroomDelete',
        action: data.code === 1 ? 1 : -1
      });
    },
    *mangerStudentNew({ payload }, { call, put }) {
      // console.log('payload...',payload)
      let data = yield call(StudentNewGet)
      console.log('add..data...', data)
      yield put({
        type: 'userStudentNew',
        action: data.data
      });
    },
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
    getGradeClass(state, { action }) {
      return {
        ...state,
        getGradeViewData: action
      }
    },
    usermangerGrad(state, { action }) {
      return {
        ...state,
        mangerGradList: action
      };
    },
    usermangerGradeupdate(state, { action }) {
      return {
        ...state,
        mangerGradeupdateList: action
      };
    },
    usermangerdelete(state, { action }) {
      return {
        ...state,
        usermangerdeleteList: action
      };
    },
    userRoomadd(state, { action }) {
      return {
        ...state,
        userRoomaddList: action
      };
    },
    userroomDelete(state, { action }) {
      return {
        ...state,
        userroomDeleteList: action
      };
    },
    userStudentNew(state, { action }) {
      return {
        ...state,
        userStudentNewList: action
      };
    },
  },
};
