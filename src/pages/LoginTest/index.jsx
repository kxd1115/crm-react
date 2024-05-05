import './index.css'


const LoginTest = () => {
  return (
    <div className="box">
      <div className="content">
        <div className="login-wrapper">
          <h1>登录</h1>
          <div className="login-form">
            <div className="username form-item">
              <span>请登录账号</span>
              <input type="text" className="input-item" />
            </div>
            <div className="username form-item">
              <span>请输入密码</span>
              <input type="text" className="input-item" />
            </div>
            <button className="login-btn">登录</button>
          </div>
          <div className="divider">
            <span className="line"></span>
            <div className="divider-text">其他登录方式</div>
            <span className="line"></span>
          </div>
          <div className="other-login-wrapper">
            <div className="other-login-item">
              <img src="src/assets/QQ.png" alt="" />
            </div>
            <div className="other-login-item">
              <img src="src/assets/WeChat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default LoginTest;