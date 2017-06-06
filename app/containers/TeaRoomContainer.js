import { Component } from 'react';
import { connect } from 'react-redux';

import TeaRoom from '../components/TeaRoom';
import {getArticleList} from '../actions';

// Redux 全局的 state 是我们teaRoom组件可通过 props 获取

function mapStateToProps(state) {
  return {
    value: state.toArtice && state.toArtice.listData
  };
}

// teaRoom action 创建函数可通过 props 获取
function mapDispatchToProps(dispatch) {
  return {
    onGetArticleList: (page) => {dispatch(getArticleList(page))},
  };
}

export default connect(
   mapStateToProps,
  mapDispatchToProps
)(TeaRoom);
