import { questions } from '../services'
export default {
  // 命名空间
  namespace: 'exam',

  // 模块内部的状态
  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 异步操作
  effects: {
    *add({ payload }, { call, put }) {
      console.log('payload...', payload);
      // let data = yield call(questions, payload);
      // console.log('data...', data)
    }
  },

  // 同步操作
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
