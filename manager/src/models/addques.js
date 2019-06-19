import { examTypea, subjectTypea, getQuestionsTypea, getQuestion, add, insertQuestionsType, getQuestions } from '../services'

export default {
  // 命名空间
  namespace: 'exam',

  // 模块内部的状态
  state: {
    examTypeData: [],
    subjectData: [],
    getQuestionsTypeData: [],
    addQuestionsFlag: 0,
    insertQuestionsFlag: 0,
    getQuestionsData: []
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
      // console.log('data...', data)
      yield put({
        type: "getexamType",
        action: data.data
      })
    },
    *subjectTypea({ payload }, { call, put }) {
      let data = yield call(subjectTypea);
      // console.log('data2...', data)
      yield put({
        type: "getsubjectType",
        action: data.data
      })
    },
    *getQuestionsType({ payload }, { call, put }) {
      let data = yield call(getQuestionsTypea);
      // console.log('data2...', data)
      yield put({
        type: "getQuestionsTypeData",
        action: data.data
      })

    },
    *insertQuestionsType({ payload }, { call, put }) {
      let data = yield call(insertQuestionsType, payload);
      // console.log('data2...', data)
      yield put({
        type: 'insertQuestions',
        action: data.code === 1 ? 1 : -1
      })
    },

    // 获取所有试题
    *getQuestions({ payload }, { call, put }) {
      let data = yield call(getQuestions)
      yield put({
        type: 'getQuestionsAll',
        action: data.data
      })
    },
    // 按条件获取试题
    *getQuestion({ payload }, { call, put }) {
      let data = yield call(getQuestion, payload)
      // console.log("获取试题.....", data)
      yield put({
        type: 'getQuestionSearch',
        action: data.data
      });
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
    },
    updateAdd(state, { action }) {
      return {
        ...state,
        addQuestionsFlag: action
      };
    },
    insertQuestions(state, { action }) {
      return {
        ...state,
        insertQuestionsFlag: action
      };
    },
    getQuestionsAll(state, { action }) {
      return {
        ...state,
        getQuestionsData: action
      };
    },
    getQuestionSearch(state, { action }) {
      return {
        ...state,
        getQuestionsData: action
      };
    }
  }
};