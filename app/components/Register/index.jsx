import React from 'react'
import './style.scss'
class Register extends React.Component{
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
 }
  render(){
    return(
      <div>
        <div className="poetry">
          <ul>
            <li className="register-poetry">大风起兮云飞扬</li>
            <li className="register-poetry">威加海内兮归故乡</li>
            <li className="register-poetry">安得猛士兮守四方</li>
          </ul>
        </div>
        <div className="register">
          <input className="inputValue" type="text" ref="username" placeholder="账号"/>
          <input className="inputValue" type="password" ref="password" placeholder="密码"/>
          <button className="sure" onClick={this.handleRegister}>注册</button>
        </div>
      </div>
    )
  }
  handleRegister(e){
    let username=this.refs.username.value.trim()
    let password=this.refs.password.value.trim()
    this.props.onRegister(username,password)
  }

}

export default Register
