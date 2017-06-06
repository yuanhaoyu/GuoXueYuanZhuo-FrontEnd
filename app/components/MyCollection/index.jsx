import React from 'react';
import {Link,hashHistory } from 'react-router';
import MyTopBar from '../MyTopBar'
import './style.scss';



class MyCollection extends React.Component{
  render(){
      return(
        <div>
            <MyTopBar title="我的收藏" url="mycenter"/>
            <div className="MyCollection-title">暂无收藏</div>
        </div>
      )
  }
}

export default MyCollection
