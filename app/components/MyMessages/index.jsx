import React from 'react';
import {Link,hashHistory } from 'react-router';
import MyTopBar from '../MyTopBar'
import './style.scss';



class MyMessages extends React.Component{
  render(){
      return(
        <div>
            <MyTopBar title="我的消息" url="mycenter"/>
            <ul className="MyMessages-content">
              <li className="MyMessages-list">
                <p className="MyMessages-title">官方消息:</p>
                <p className="MyMessages-val">欢迎来到国学圆桌网! ​​</p>
              </li>
              <li className="MyMessages-list">
                <p className="MyMessages-title">官方消息:</p>
                <p className="MyMessages-val">恭喜你完成注册! ​​</p>
              </li>
            </ul>
        </div>
      )
  }
}

export default MyMessages
