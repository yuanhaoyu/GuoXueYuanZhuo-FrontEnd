import { Component } from 'react';
import { connect } from 'react-redux';

import Rank from '../components/Rank';
import { getRank} from '../actions';



// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  console.log(state.toGetRank.rankData);
  return {
    value: state.toGetRank.rankData
  };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return {
    onGetRank: () => {dispatch(getRank())},
  };
}

export default connect(
   mapStateToProps,
  mapDispatchToProps
)(Rank);
