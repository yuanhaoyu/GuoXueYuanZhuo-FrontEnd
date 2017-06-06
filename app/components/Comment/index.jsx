import React from 'react';
import {Link,hashHistory } from 'react-router';
import './style.scss';
import user from "../../images/user.jpg";
import unuser from "../../images/unuser.jpg";

import last from "../../images/last.png";




class Comment extends React.Component{
  render(){
      return(
        <div className="comment">
          <div className="comment-topbar">
            <div className="l"><Link to="articemore"><img src={last} alt=""/></Link></div>
            <div className="l comment-topbar-title">韩碑</div>
          </div>
          <div className="cl"></div>
          <p>全部评论</p>
          <ul>
            <li className="comment-list">
              <div className="comment-user l">
               <img src={user} alt=""/>
              </div>
              <div className="comment-content l">
                <div className="comment-name">Houn</div>
                <div className="comment-time">2016-05-20 10:44</div>
                <div className="comment-msg">韩碑，深有同感啊</div>
              </div>
              <hr className="comment-line"/>
            </li>
            <li className="comment-list">
              <div className="comment-user l">
               <img src={unuser} alt=""/>
              </div>
              <div className="comment-content l">
                <div className="comment-name">柚子</div>
                <div className="comment-time">2016-06-22 07:21</div>
                <div className="comment-msg">宿醉离愁慢髻鬟，六铢衣薄惹轻寒，慵红闷翠掩青鸾。罗袜况兼金菡萏，雪肌仍是玉琅玕，骨香腰细更沈檀。</div>
              </div>
              <hr className="comment-line"/>
            </li>
                        <li className="comment-list">
              <div className="comment-user l">
               <img src={unuser} alt=""/>
              </div>
              <div className="comment-content l">
                <div className="comment-name">Houner</div>
                <div className="comment-time">2016-06-22 11:02</div>
                <div className="comment-msg">楼上的道友，我们头像是一样的，如此缘机，何不交个朋友。</div>
              </div>
              <hr className="comment-line"/>
            </li>            <li className="comment-list">
              <div className="comment-user l">
               <img src={unuser} alt=""/>
              </div>
              <div className="comment-content l">
                <div className="comment-name">柚子</div>
                <div className="comment-time">2016-06-23 19:18</div>
                <div className="comment-msg">如此甚好，甚好！</div>
              </div>
              <hr className="comment-line"/>
            </li>            <li className="comment-list">
              <div className="comment-user l">
               <img src={user} alt=""/>
              </div>
              <div className="comment-content l">
                <div className="comment-name">Houn</div>
                <div className="comment-time">2016-06-23 10:24</div>
                <div className="comment-msg">宿醉离愁慢髻鬟，六铢衣薄惹轻寒，慵红闷翠掩青鸾。罗袜况兼金菡萏，雪肌仍是玉琅玕，骨香腰细更沈檀。</div>
              </div>
              <hr className="comment-line"/>
            </li>            <li className="comment-list">
              <div className="comment-user l">
               <img src={unuser} alt=""/>
              </div>
              <div className="comment-content l">
                <div className="comment-name">Houner</div>
                <div className="comment-time">2016-05-20 10:44</div>
                <div className="comment-msg">宿醉离愁慢髻鬟，六铢衣薄惹轻寒，慵红闷翠掩青鸾。罗袜况兼金菡萏，雪肌仍是玉琅玕，骨香腰细更沈檀。</div>
              </div>
              <hr className="comment-line"/>
            </li>            <li className="comment-list">
              <div className="comment-user l">
               <img src={unuser} alt=""/>
              </div>
              <div className="comment-content l">
                <div className="comment-name">Houner</div>
                <div className="comment-time">2016-05-20 10:44</div>
                <div className="comment-msg">宿醉离愁慢髻鬟，六铢衣薄惹轻寒，慵红闷翠掩青鸾。罗袜况兼金菡萏，雪肌仍是玉琅玕，骨香腰细更沈檀。</div>
              </div>
              <hr className="comment-line"/>
            </li>            <li className="comment-list">
              <div className="comment-user l">
               <img src={unuser} alt=""/>
              </div>
              <div className="comment-content l">
                <div className="comment-name">Houner</div>
                <div className="comment-time">2016-05-20 10:44</div>
                <div className="comment-msg">宿醉离愁慢髻鬟，六铢衣薄惹轻寒，慵红闷翠掩青鸾。罗袜况兼金菡萏，雪肌仍是玉琅玕，骨香腰细更沈檀。</div>
              </div>
              <hr className="comment-line"/>
            </li>            <li className="comment-list">
              <div className="comment-user l">
               <img src={unuser} alt=""/>
              </div>
              <div className="comment-content l">
                <div className="comment-name">Houner</div>
                <div className="comment-time">2016-05-20 10:44</div>
                <div className="comment-msg">宿醉离愁慢髻鬟，六铢衣薄惹轻寒，慵红闷翠掩青鸾。罗袜况兼金菡萏，雪肌仍是玉琅玕，骨香腰细更沈檀。</div>
              </div>
              <hr className="comment-line"/>
            </li>
          </ul>
          <div className="myComment">评论</div>
        </div>
      )
  }
}

export default Comment
