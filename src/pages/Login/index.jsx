
import { LoginCard, LogintextField, LoginBox, LoginButton } from "@/components/individuation";

import './index.css';

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '@/store/modules/userStore';


const NewLogin = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // 获取登录数据
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loginmsg = {
      "username": username,
      "password": password
    };
    
    // 弹出登录提醒
    const [success, setSuccess] = useState(false);

    // const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //       return;
    //     }
    //     setSuccess(false);
    // };

    // 点击登录后验证token，并跳转至主页
    const onLoginClick = async () => {
      dispatch(fetchLogin(loginmsg));
      navigate('/');
      setSuccess(true);
    };

    return (
      <>
        <div className="login-container">
          <LoginCard>
          <h4 className="login-title" >Sign in to CRM</h4>
          <LoginBox>
            <LogintextField 
            id="outlined-username-input" 
            label="账号" 
            variant="outlined"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <LogintextField 
            id="outlined-password-input"
            label="密码"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          </LoginBox>
          <LoginButton variant="conextended" onClick={onLoginClick}>登录</LoginButton>
          </LoginCard>
        </div>
      </>
    )
};

export default NewLogin;