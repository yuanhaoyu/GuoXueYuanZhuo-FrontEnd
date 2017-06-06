import { Component } from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login';
import { login} from '../actions';

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  console.log(state);
  return {
    value: state.toLogin.isLogin
  };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return {
    onLogin: (username,password) => {dispatch(login(username,password))},
  };
}

export default connect(
   mapStateToProps,
  mapDispatchToProps
)(Login);
