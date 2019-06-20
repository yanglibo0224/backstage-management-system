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

// mangerGradeupdateGet
export function mangerGradeupdateGet(params) {
    return request({
        url: '/manger/grade/update',
        method: 'PUT',
        data: params
    })
}

//mangerdeleteGet
export function mangerdeleteGet(params) {
    return request({
        url: '/manger/grade/delete',
        method: 'DELETE',
        data: params
    })
}
//RoomaddGet
export function RoomaddGet(params) {
    return request({
        url: '/manger/room',
        method: 'POST',
        params
    })
}