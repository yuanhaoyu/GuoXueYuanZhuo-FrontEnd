import { Component } from 'react';
import { connect } from 'react-redux';

import TopBar from '../components/TopBar';
import { getUserInfo ,loginOut} from '../actions';

// Redux 全局的 state 是我们topbar组件可通过 props 获取
function mapStateToProps(state) {
  return {
    value: state.toUser
  };
}

// topbar action 创建函数可通过 props 获取
function mapDispatchToProps(dispatch) {
  return {
    onLoginOut: () => {dispatch(loginOut())},
    onGetUserInfo:()=>{dispatch(getUserInfo())}
  };
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(TopBar);
