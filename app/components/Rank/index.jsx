import React from 'react';
import {Link,hashHistory } from 'react-router';
import TopBarContainer from '../../containers/TopBarContainer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import './style.scss';


class Rank extends React.Component{
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    this.props.onGetRank();  
  }
  render(){
      console.log(this.props.value);
      if(!this.props.value){
        return false;
      }
      var myRank=this.props.value[0];
      if(myRank=="-1"){
        myRank="当前用户未登陆";
      }else if(myRank=="-2"){
        myRank="当前用户未比赛";
      }else{
        myRank="当前排名：第"+myRank+"名";
      }
      var allRank=this.props.value[1]; 
      console.log(allRank);     
      return(
        <div>
          <TopBarContainer/>
          <div className="rank">
            <div className="rank-title">{myRank}</div>
              <ul className="rank-content" >
                  {allRank.map(function(data) {
                    return <li key={data.name}>第{data.rank}名: {data.name}</li>
                  },this)}
              </ul>
          </div>
          <FloatingActionButton className="pk-back" backgroundColor="#161616"><Link to="battle">返回</Link></FloatingActionButton>
        </div>
      )

  }
}

export default Rank
