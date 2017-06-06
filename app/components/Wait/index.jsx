import React from 'react';
import './style.scss';



class Wait extends React.Component{
  render(){
      return(
        <div className="wait">
          <div className="wait-content">
            <div className="wait-content2">
              <div className="wait-content3"></div>                   
            </div>     
          </div>
          <div className="title">···加载中···</div>
        </div>
      )
  }
}

export default Wait
