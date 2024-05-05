import { setToken as _setToken, removeToken, getToken } from "@/utils";
import { getProfileAPI, loginAPI } from "@/apis/user";
import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
    name: "user",
    initialState: {
        token: getToken() || '',
        userInfo: {}
    },
    // 同步修改方法
    reducers: {
        // 存储token
        setToken(state, action) {
            state.token = action.payload;
            // 本地loaclStorage存储
            _setToken(action.payload);
        },
        // 获取用户信息
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        //清理用户信息
        clearUserInfo(state, action) {
            state.token = '';
            state.userInfo = {};
            removeToken();
        },
    }
});

// 解构actionCreater
const { setToken, setUserInfo, clearUserInfo } = userStore.actions;

// 获取reducer函数
const userReducer = userStore.reducer;

// 封装异步方法 完成登录 并获取token
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        // 发送异步请求
        const res = await loginAPI(loginForm);
        console.log(res);
        // 提交同步action进行token的存入
        dispatch(setToken(res.access_token));
    }
}

// 封装异步方法 获取个人信息
const fetchUserInfo = () => {
    return async (dispatch) => {
        // 发送异步请求
        const res = await getProfileAPI();
        dispatch(setUserInfo(res.user_msg));
    }
}

// 导出同步方法和异步方法
export { setToken, fetchLogin, fetchUserInfo, clearUserInfo };
// 导出reducer 方便后续注入主程序
export default userReducer;