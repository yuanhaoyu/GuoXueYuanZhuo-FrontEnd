import React from 'react';
import {Link,hashHistory } from 'react-router';
import './style.scss';
import Check from '../Check';
import Nav from '../Nav';
import Desk from '../Desk';
import Activity from '../Activity';
import Recommend from '../Recommend';
import TopBarContainer from '../../containers/TopBarContainer';

class Home extends React.Component{
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    this.props.onGetIndexInfo();
  }
  render(){
   
    if(this.props.value==undefined){
      return (
        <div>
          <p className="home-error">服务器异常，请少侠稍后重试！</p>
        </div>
      )
    }else{
      return(
        <div className="home">
          <div className="header">
            <TopBarContainer/>
            <Nav/>
          </div>
          <div className="placeDiv"></div>
          <Desk indexImgUrl={this.props.value.pushPic.url}/>
          <Activity activityTitle="悬赏榜" activityContent="闯关模式下在10点体力内连续完成9关，有机会获得神秘道具！"/>
          <Link to={"/articemore?id="+this.props.value.article.id}>
            <Recommend  recommendTitle={this.props.value.article.title} recommendContent={this.props.value.article.content}/>
          </Link>
        </div>
      )
    }
  }
}

export default Home
