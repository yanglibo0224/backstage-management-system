import { createTestPaper } from '../services';

export default {
    // 命名空间
    namespace: 'management',

    // 模块内部的状态
    state: {
        createTestList:[]
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    // 异步操作
    effects: {
        //创建试卷
        *createTest({ payload }, { call, put }) {
            console.log(payload)
            let data = yield call(createTestPaper, payload);
            console.log('add...', data);
            yield put({
                type: 'createTests',
                action: data.code
            })
        },
        // *add({ payload }, { call, put }) {
        //     // console.log('payload...',payload)
        //     let data = yield call(add, payload)
        //     console.log('add..data...', data)
        //     yield put({
        //         type: 'updateAdd',
        //         action: data.code === 1 ? 1 : -1
        //     });
        // },
    },

    // 同步操作
    reducers: {
        createTests(state, { action }) {
            return {
                ...state,
                createTestList: action
            };
        }
    }
};
