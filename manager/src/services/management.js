import request from '../utils/request';

//创建试卷
export function createTestPaper(params) {
    return request({
        url: '/exam/exam',
        method: 'POST',
        data: params
    })
}

//获取试卷详情（教师端）
export function getExamDetail() {
    return request({
        url: '/exam/exam/w5tcy-g2dts',
        method: 'GET'
    })
}