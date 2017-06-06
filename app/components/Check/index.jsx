import React from 'react';
import {Link,hashHistory } from 'react-router';
import './style.scss';



class Check extends React.Component{
  render(){
      return(
        <div className="checkBox">
            <div className="check">
                <div className="check-title">提示</div>
                <div className="check-content">客官大人！请先登录</div>
                <Link to="login"><div className="check-btn">确定</div></Link>
            </div>
        </div>
      )
  }
}

export default Check
