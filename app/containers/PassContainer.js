import { Component } from 'react';
import { connect } from 'react-redux';

import Pass from '../components/Pass';
import { getQuestions } from '../actions';
import { commitQuestions } from '../actions';
import { resetError } from '../actions';

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  return {
    question: state.toPass.questionData,
    nextFlag: state.toPass.nextFlag,
    resultFlag: state.toPass.resultFlag
  };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return {
    onGetQuestions: () => {dispatch(getQuestions())},
    onCommitQuestions:(id,answer)=>{dispatch(commitQuestions(id,answer))},
    onResetError: () => {dispatch(resetError())}
  };
}

export default connect(
   mapStateToProps,
  mapDispatchToProps
)(Pass);
