// 封装3个和Token相关的方法：存 取 删

const TOKEN_KEY = 'Token_key';

// 存
function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

// 取
function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

// 删
function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
}

export {
    setToken, 
    getToken, 
    removeToken
};
