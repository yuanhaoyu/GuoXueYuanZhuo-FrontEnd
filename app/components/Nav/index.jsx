import React from 'react';
import {Link,hashHistory } from 'react-router';
import './style.scss';

var a1="";
var a2="";
var a3="";

class Nav extends React.Component{
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    let href= location.href;
    a1="";
    a2="";
    a3="";
    if(href.indexOf("home")!==-1){
      a1="nav-active";
    }else if(href.indexOf("battle")!==-1){
      a2="nav-active";
    }else if(href.indexOf("tearoom")!==-1){
      a3="nav-active"
    }else{
      a1="nav-active"; // 无home的Index
    }
  }
  render(){
      return(
        <div className="Nav">
          <ul>
            <li><Link className={a1} to="home">圆桌</Link></li>
            <li><Link className={a2} to="battle">历练</Link></li>
            <li><Link className={a3} to="tearoom">茶社</Link></li>            
          </ul>
        </div>
      )

  }
}

export default Nav
