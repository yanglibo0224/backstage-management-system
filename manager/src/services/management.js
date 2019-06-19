import request from '../utils/request';

//创建试卷
export function createTestPaper(params) {
    return request({
        url: '/exam/exam',
        method: 'POST',
        data: params
    })
}