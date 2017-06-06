import { Component } from 'react';
import { connect } from 'react-redux';

import Pk from '../components/Pk';
import {pkConnect,pkSearch,pkReady,pkAnswer} from '../actions';

//  Redux 全局的 state 是我们pk组件可通过 props 获取
function mapStateToProps(state) {
  return {
    value:state.toPk
  };
}

// Pk action 创建函数可通过 props 获取

function mapDispatchToProps(dispatch) {
  return {
    onConnect: () => {dispatch(pkConnect())},
    onSearch: ()=>{dispatch(pkSearch())},
    onReardy: ()=>{dispatch(pkReady())},
    onAnswer:(answer)=>{dispatch(pkAnswer(answer))}
  };
}


export default connect(
   mapStateToProps,
  mapDispatchToProps
)(Pk);
  