        
import { examTypea ,subjectType} from '../services'
export default {
  // 命名空间
  namespace: 'exam',

  // 模块内部的状态
  state: {
    examTypeData:[],
    subjectData:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 异步操作
  effects: {
    *examTypeac({ payload }, { call, put }) {
      let data = yield call(examTypea);
      // console.log('data...', data)
      yield put({
        type:"getexamType",
        action:data.data
      })
    },
    // *subjectType({ payload }, { call, put }) {
    //   let data = yield call(subjectType);
    //   console.log('data...', data)
    //   yield put({
    //     type:"getsubjectType",
    //     action:data.data
    //   })
    // }
  },

  // 同步操作
  reducers: {
   getexamType(state,{action}){
     return{
       ...state,
       examTypeData:action
     }
   },
  //  getsubjectType(state,{action}){
  //   return{
  //     ...state,
  //     subjectData:action
  //   }
  //  }
  }
};
