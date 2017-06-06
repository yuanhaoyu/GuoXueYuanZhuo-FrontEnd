import { Component } from 'react';
import { connect } from 'react-redux';

import Register from '../components/Register';
import { register } from '../actions';

// Redux 全局的 state 是我们register组件可通过 props 获取
function mapStateToProps(state) {
  return {
    isLogin: state.isLogin
  };
}

// register action 创建函数可通过 props 获取
function mapDispatchToProps(dispatch) {
  return {
    onRegister: (username,password) => {dispatch(register(username,password))}
  };
}

export default connect(
   mapStateToProps,
  mapDispatchToProps
)(Register);
