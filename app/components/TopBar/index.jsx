import React from 'react';
import Drawer from 'material-ui/Drawer';
import {Link,hashHistory } from 'react-router';
import './style.scss';




class TopBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);    
    this.handleClose = this.handleClose.bind(this);
    this.handleLoginOut=this.handleLoginOut.bind(this);
  }
  componentWillMount(){
    this.props.onGetUserInfo();
  }
  handleToggle(){
    this.setState({open: !this.state.open})
  }
  handleClose(){
    this.setState({open: false})
  } 
  handleLoginOut(){
    this.props.onLoginOut();
  }

  render(){ 
      //获取个人信息失败，即未登录
      if(this.props.value.data==undefined){
        return(
          <div className="topbar">
            <div className="userImg"><img src="//yzyxw.oss-cn-shanghai.aliyuncs.com/pic/unUser.jpg" alt="" onTouchTap={this.handleToggle}/></div>
            <div className="userName">游客模式</div>
            <div className="VIT"><Link to="login">登录</Link></div>
          </div>
        )
      }
      return(
        <div className="topbar">
					<div className="userImg"><img src="//yzyxw.oss-cn-shanghai.aliyuncs.com/pic/user.jpg" alt="" onTouchTap={this.handleToggle}/></div>
					<div className="userName">{this.props.value.data.name}</div>
					<div className="VIT">体力 {this.props.value.data.power}</div>
          <Drawer className="sideNav" docked={false} width={248} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
            <div className="topbar-userInfo">
              <img src="//yzyxw.oss-cn-shanghai.aliyuncs.com/pic/user.jpg"  alt=""/>
              <p className="topbar-userInfo-name">Lv:{this.props.value.data.level}  {this.props.value.data.name}</p>
            </div>
            <div className="line" />
            <div className="topbar-other">
              <ul>
                <li><Link to="home">圆桌首页</Link></li>              
                <li><Link to="mycenter">个人中心</Link></li>
                <li>吟诗作赋</li>                                       
                <li>任务市场</li>                       
                <li onClick={this.handleLoginOut}>注销退出</li>                
              </ul>
            </div>            
          </Drawer>
        </div>
      )
  }
}

export default TopBar
