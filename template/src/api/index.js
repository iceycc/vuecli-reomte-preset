import request from '../utils/request';

// 获取直播地址
export function getUser(params) {
    return request({
        url: '/user/get',
        method: 'get',
        type: 'normal',
        params: params
    });
}

