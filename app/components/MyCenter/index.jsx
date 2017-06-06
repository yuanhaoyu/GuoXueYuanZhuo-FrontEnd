import React from 'react';
import {Link,hashHistory } from 'react-router';
import MyTopBar from '../MyTopBar'
import './style.scss';


class MyCenter extends React.Component{
  constructor(props) {
    super(props);
    this.see = this.see.bind(this);    

  }
  componentWillMount(){
    this.props.onGetUserInfo();
  }
  render(){
      //获取个人信息失败，即未登录
      if(this.props.value.data==undefined){
        return(
          <div>
            <MyTopBar title="个人中心" url="home"/>
            <div className="userInfo">
              <div className="userImg"><img src="http://yzyxw.oss-cn-shanghai.aliyuncs.com/pic/user.jpg" alt=""/></div>
              <div className="userName">未登录</div>
              <div className="userLv"></div>              
            </div>
          </div>
        )
      }
      return(
        <div onClick={this.see}>
            <MyTopBar title="个人中心" url="home"/>
            <div className="userInfo">
              <div className="userImg"><img src="http://yzyxw.oss-cn-shanghai.aliyuncs.com/pic/user.jpg" alt=""/></div>
              <div className="userName">{this.props.value.data.name}</div>
              <div className="userLv">LV: {this.props.value.data.level}</div>              
            </div>
            <div className="userModel">
              <div><Link to="mymessages">我的消息<div className="userModel-icon"><img src="//yzyxw.oss-cn-shanghai.aliyuncs.com/pic/next.png" alt=""/></div></Link></div>
              <div className="userModel-line"></div>
              <div><Link to="myedit">我的信息<div className="userModel-icon"><img src="//yzyxw.oss-cn-shanghai.aliyuncs.com/pic/next.png" alt=""/></div></Link></div>
              <div className="userModel-line"></div>              
              <div><Link to="mycollection">我的收藏<div className="userModel-icon"><img src="//yzyxw.oss-cn-shanghai.aliyuncs.com/pic/next.png" alt=""/></div></Link></div>              
              <div className="userModel-line"></div>              
            </div>
        </div>
      )
  }
  see(e){
    e.stopPropagation();
    var moreSta=document.querySelector(".MyTopBar-more").style.display;
    console.log(moreSta);
  }
}

export default MyCenter
