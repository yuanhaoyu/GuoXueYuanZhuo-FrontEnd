import React from 'react';
import {Link,hashHistory } from 'react-router';
import './style.scss';
import {GetLunarDay} from '../../utils/tool';

class Desk extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    var D=new Date();
    var yy=D.getFullYear();
    var mm=D.getMonth()+1;
    var dd=D.getDate();
    var ww=D.getDay();
    var ss=parseInt(D.getTime() / 1000);
    if (yy<100) yy="19"+yy;
    if (mm<10) mm="0"+mm;
    if (ww<10) ww="0"+ww;
    var now=GetLunarDay(yy,mm,dd);

      return(
        <div className="Desk">
            <div className="DeskImg"><img src={"//yzyxw.oss-cn-shanghai.aliyuncs.com/"+this.props.indexImgUrl} alt=""/></div>
            <div className="DeskTime">
                <div className="time">{yy}-{mm}-{ww}</div>
                <div className="timeCH">农历{now}</div>
            </div>
            <hr/>
        </div>
      )

  }
}

export default Desk
