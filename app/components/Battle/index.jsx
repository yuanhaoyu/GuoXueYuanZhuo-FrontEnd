import React from 'react';
import {Link,hashHistory } from 'react-router';
import './style.scss';
import Check from '../Check';
import Nav from '../Nav';
import Desk from '../Desk';
import Activity from '../Activity';
import Recommend from '../Recommend';
import TopBarContainer from '../../containers/TopBarContainer';




class Battle extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
 
      return(
        <div className="battle">
          <TopBarContainer/>
          <Nav/>
          <Link to="pass"><div className="battle-pass">背水一战</div></Link>
          <Link to="pk"><div className="battle-pk">百家争鸣</div></Link>        
          <Link to="rank"><div className="battle-rank">琅琊榜</div></Link>                      
        </div>
      )
    
  }
}

export default Battle
