import { request } from "@/utils";

// 1. 登录请求
export function loginAPI(formdata) {
    // 通用写法
    return request({
        url: '/login/',
        method: 'POST',
        data: formdata
    });
}

// 2 获取用户信息
export function getProfileAPI() {
    return request({
        url: '/login/profile',
        method: 'GET'
    })
}