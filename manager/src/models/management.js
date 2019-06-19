import { createTestPaper, getExamDetail } from '../services';

export default {
    // 命名空间
    namespace: 'management',

    // 模块内部的状态
    state: {
        createTestList: 0,
        examDetailList: []
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    // 异步操作
    effects: {
        //创建试卷
        *createTest({ payload }, { call, put }) {
            console.log(payload);
            let data = yield call(createTestPaper, payload);
            console.log('add...', data);
            yield put({
                type: 'createTests',
                action: data.code === 1 ? 1 : -1
            })
        },
        //获取试卷详情（教师端）
        *getExamDetails({ payload }, { call, put }) {
            let data = yield call(getExamDetail,payload);
            console.log('detail...', data);
            yield put({
                type: 'examDetail',
                action: data.data
            })
        }
    },

    // 同步操作
    reducers: {
        createTests(state, { action }) {
            return {
                ...state,
                createTestList: action
            };
        },
        examDetail(state, { action }) {
            return {
                ...state,
                examDetailList: action
            }
        }
    }
};
