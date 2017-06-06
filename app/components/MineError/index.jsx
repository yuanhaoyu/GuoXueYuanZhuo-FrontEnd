import React from 'react';
import {Link,hashHistory } from 'react-router';
import TopBarContainer from '../../containers/TopBarContainer';
import './style.scss';



class MineError extends React.Component{
  render(){
      return(
        <div>
            <TopBarContainer/>
            <div className="error">
              <div className="error-title">{this.props.title}</div>
              <div className="error-content">对不起!<br/>你的答案有误</div>
              <Link to="home"><div className="error-btn">确定</div></Link>
            </div>
        </div>
      )
  }
}

export default MineError
