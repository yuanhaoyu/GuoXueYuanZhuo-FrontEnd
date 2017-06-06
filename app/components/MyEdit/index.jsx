import React from 'react';
import {Link,hashHistory } from 'react-router';
import MyTopBar from '../MyTopBar'
import './style.scss';



class MyEdit extends React.Component{
  render(){
      return(
        <div className="MyEdit-box">
            <MyTopBar title="我的信息" url="mycenter"/>
            <div className="MyEdit-Content">
              <div className="MyEdit-list">
                <div className="MyEdit-left l">头像</div>
                <div className="MyEdit-img r"><img src="#" alt=""/></div>
              </div>
              <div className="cl"></div>
              <div className="MyEdit-list">
                <div className="MyEdit-left l ">名称</div>
                <div className="MyEdit-name r">123</div>
              </div>
              <div className="cl"></div>              
              <div className="MyEdit-list">
                <div className="MyEdit-left l">性别</div>
                <div className="MyEdit-sex r">man</div>
              </div>
              <div className="cl"></div>              
              <div className="MyEdit-list">
                <div className="MyEdit-left l">生日</div>
                <div className="MyEdit-br r">12.2</div>
              </div>
              <div className="cl"></div>              
            </div>
            
        </div>
      )
  }
}

export default MyEdit
