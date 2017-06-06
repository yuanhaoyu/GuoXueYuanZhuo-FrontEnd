import React from 'react';
import { Router, Route, Link ,IndexRoute ,hashHistory,browserHistory  } from 'react-router';
import './style.scss';
import logotitle from "../../images/logotitle.png"


class Login extends React.Component{
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
 }
    
  render(){
    if(this.props.value){
      browserHistory.push('/home');
    }
    return(
      <div className="loginBox">
        <img className="logotitle" src={logotitle}/>
        <div className="Visitor-line"></div>
        <div className="Visitor">
          <Link to="home">游客模式</Link>
        </div>
        <div className="login">
          <input className="inputValue" type="text" ref="username" placeholder="账号"/>
          <input className="inputValue" type="password" ref="password" placeholder="密码"/>
          <button className="sure" onClick={this.handleLogin}>登陆</button>
          <p className="register-title">现在还没有账号？点击<Link to="register">注册</Link></p>
        </div>
      </div>
    )
  }
  handleLogin(e){
    let username=this.refs.username.value.trim()
    let password=this.refs.password.value.trim()
    this.props.onLogin(username,password)
  }

}

export default Login
