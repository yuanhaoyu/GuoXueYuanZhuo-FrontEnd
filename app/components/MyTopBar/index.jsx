import React from 'react';
import {Link,hashHistory } from 'react-router';
import './style.scss';

class MyTopBar extends React.Component{
  constructor(props) {
    super(props);
    this.showMore = this.showMore.bind(this);
  }
  render(){
      return(
        <div>
					<div className="MyTopBar-content">
						<div className="MyTopBar-left"><Link to={this.props.url}>返回</Link></div>
            <div className="MyTopBar-left-line"></div>
						<div className="MyTopBar-center">{this.props.title}</div>
						<div className="MyTopBar-right"  onClick={this.showMore}>...</div>
            <div className="MyTopBar-more">
              <ul>
                <li>分享</li>
              </ul>
            </div>
					</div>
        </div>
      )
  }
  showMore(){
    var showSta=document.querySelector(".MyTopBar-more").style.display;
    console.log(showSta);
    if(showSta=="" ||showSta=="none" ){
      document.querySelector(".MyTopBar-more").style.display="block";
    }else{
      document.querySelector(".MyTopBar-more").style.display="none";
    }
  }
}

export default MyTopBar
