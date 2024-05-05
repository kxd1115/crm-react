import axios from 'axios';
import { getToken, removeToken } from './token';

const request = axios.create({
    // 根域名配置
    // baseURL: 'http://127.0.0.1:8000/',
    baseURL: 'http://192.168.1.9:8000',
    // 超时响应时间
    timeout: 5000
});

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        // 操作config 注入token数据
        // 1 获取token
        const token = getToken();
        // 注入token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

// 响应拦截器
request.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        // 监控401 token失效
        console.dir(error)
        if (error.response.status === 401) {
            removeToken()
            message.warning("账号或密码输入错误")
            // 跳转到登录页
            router.navigate('/login')
            // 页面重新加载
            window.location.reload()
        }
        return Promise.reject(error);
    }
)

export {
    request
};