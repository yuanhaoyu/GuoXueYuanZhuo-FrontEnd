import React from 'react';
import {Link,hashHistory } from 'react-router';
import './style.scss';

class Activity extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
      return(
        <div className="Activity">
          <div className="Activity-title">{this.props.activityTitle}</div>
          <div className="Activity-content">{this.props.activityContent}</div>          
          <div className="line"/>
        </div>
      )
  }
}

export default Activity
