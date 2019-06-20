import { createTestPaper, getExamDetail, getTestList, delTest } from '../services';

export default {
    // 命名空间
    namespace: 'management',

    // 模块内部的状态
    state: {
        createTestList: [],
        examDetailList: [],
        testList: [],
        del:[]
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
                action: data.data
            })
        },
        //获取试卷详情（教师端）
        *getExamDetails({ payload }, { call, put }) {
            let data = yield call(getExamDetail, payload);
            console.log('detail...', data);
            yield put({
                type: 'examDetail',
                action: data.data
            })
        },
        //获取试卷列表
        *getTestLists({ payload }, { call, put }) {
            let data = yield call(getTestList);
            console.log('list..', data);
            yield put({
                type: 'getTest',
                action: data.exam
            })
        },
        //删除试卷
        *delTestList({ payload }, { call, put }) {
            let data = yield call(delTest);
            console.log('del', data);
            yield put({
                type: 'delTests',
                action: data
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
        },
        getTest(state, { action }) {
            return {
                ...state,
                testList: action
            }
        },
        delTests(state, { action }) {
            return {
                ...state,
                del:action
            }
        }
    }
};
