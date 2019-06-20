import request from '../utils/request';

//创建试卷
export function createTestPaper(params) {
    return request({
        url: '/exam/exam',
        method: 'POST',
        data: params
    })
}

// //获取试卷详情（教师端）
export function getExamDetail(params) {
    return request({
        url: `/exam/exam/${params}`,
        method: 'GET',
        // params
    })
}

//获取试卷列表
export function getTestList() {
    return request({
        url: '/exam/exam',
        method: 'GET'
    })
}

//删除试卷
export function delTest(params){
    return request({
        url:`/exam/exam/${params}`,
        method:'DELETE'
    })
}