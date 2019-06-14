import { examTypea, subjectTypea, getQuestionsTypea, add } from '../services'
export default {
  // 命名空间
  namespace: 'exam',

  // 模块内部的状态
  state: {
    examTypeData: [],
    subjectData: [],
    getQuestionsTypeData: [],
    addQuestionsFlag: 0
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 异步操作
  effects: {
    // 添加试题
    *add({ payload }, { call, put }) {
      // console.log('payload...',payload)
      let data = yield call(add, payload)
      console.log('add..data...', data)
      yield put({
        type: 'updateAdd',
        action: data.code === 1 ? 1 : -1
      });
    },
    *examTypea({ payload }, { call, put }) {
      let data = yield call(examTypea);
      console.log('data...', data)
      yield put({
        type: "getexamType",
        action: data.data
      })
    },
    *subjectTypea({ payload }, { call, put }) {
      let data = yield call(subjectTypea);
      console.log('data2...', data)
      yield put({
        type: "getsubjectType",
        action: data.data
      })
    },
    *getQuestionsType({ payload }, { call, put }) {
      let data = yield call(getQuestionsTypea);
      console.log('data2...', data)
      yield put({
        type: "getQuestionsTypeData",
        action: data.data
      })
    }
  },

  // 同步操作
  reducers: {
    getexamType(state, { action }) {
      return {
        ...state,
        examTypeData: action
      }
    },
    getsubjectType(state, { action }) {
      return {
        ...state,
        subjectData: action
      }
    },
    getQuestionsTypeData(state, { action }) {
      return {
        ...state,
        getQuestionsTypeData: action
      }
    }, updateAdd(state, { action }) {
      return {
        ...state,
        addQuestionsFlag: action
      };
    }
  }
};
