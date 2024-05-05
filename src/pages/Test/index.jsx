import './index.css';

import React, { useState } from "react";


const Test = () => {

    return (
      <div className='wrap'>
        <div className='nav'>

          <div className='btn'>
            <div className='btn-item'></div>
            <div className='btn-item'></div>
            <div className='btn-item'></div>
          </div>
          <div className='icon'>
            <div className='icon-img'><img src='src/assets/user.jpeg' /></div>
            <div className='icon-con'>
              <p>Good Day</p>
              <h2>Dennis Kang.</h2>
            </div>
          </div>
          {/* 分割 */}
          <div className='line'></div>
          <div className='title'>
            <p>Menu 6</p>
          </div>
          {/* 分割 */}
          <div className='menu'>
            <div className="item">
              <div className="light"></div>
              <div className="icon">
                <span className='iconfont icon-wenjian1'></span>
              </div>
              <div className="con">Payouts</div>
              <div className="ricon"></div>
            </div>
            <div className="item">
              <div className="light"></div>
              <div className="icon">
                <span className='iconfont icon-wenjian1'></span>
              </div>
              <div className="con">Discounts</div>
              <div className="ricon"></div>
            </div>
          </div>
          {/* 分割 */}
          <div className='line'></div>
          <div className='title'>
            <p>Server 6</p>
          </div>

          <div className="serve">
            <div className="item">
              <div className="light"></div>
              <div className="icon">
                <span className='iconfont icon-wenjian1'></span>
              </div>
              <div className="con">Payouts</div>
              <div className="ricon"></div>
            </div>
          </div>


        </div>
      </div>
    )
};

export default Test;