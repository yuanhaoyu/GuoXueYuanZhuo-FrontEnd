import { Component } from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home';
import {getIndexInfo} from '../actions';

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  return {
    value: state.toHome && state.toHome.indexData
  };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return {
    onGetIndexInfo: () => {dispatch(getIndexInfo())},
  };
}

export default connect(
   mapStateToProps,
  mapDispatchToProps
)(Home);
