import { Component } from 'react';
import { connect } from 'react-redux';

import ArticeMore from '../components/ArticeMore';
import {getArticleMore} from '../actions';

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  return {
    value: state.toArtice && state.toArtice.moreData
  };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return {
    onGetArticleMore: (id) => {dispatch(getArticleMore(id))},
  };
}

export default connect(
   mapStateToProps,
  mapDispatchToProps
)(ArticeMore);
