import { Component } from 'react';
import { connect } from 'react-redux';

import MineError from '../components/MineError';

import { resetError } from '../actions';

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  return {

  };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return {
    onResetError: () => {dispatch(resetError())},
  };
}

export default connect(
   mapStateToProps,
  mapDispatchToProps
)(MineError);
