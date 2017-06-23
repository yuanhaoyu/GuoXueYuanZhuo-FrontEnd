import React from 'react';
import {Link,hashHistory } from 'react-router';
import './style.scss';

class Recommend extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
      return(
        <div className="Recommend">
          <div className="Recommend-title">{this.props.recommendTitle}</div>
          <div className="Recommend-content">{this.props.recommendContent}</div>
           <div className="line"/>
        </div>
      )

  }
}

export default Recommend
