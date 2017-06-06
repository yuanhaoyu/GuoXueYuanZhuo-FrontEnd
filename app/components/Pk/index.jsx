import React from 'react';
import { Router, Route, Link ,IndexRoute ,hashHistory,browserHistory } from 'react-router';
import './style.scss';
import Check from '../Check'
import MineError from '../MineError'
import Wait from '../Wait'
import {isEmpty} from '../../utils/tool'
import TopBarContainer from '../../containers/TopBarContainer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

class Pk extends React.Component{
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.ready = this.ready.bind(this);
    this.answer= this.answer.bind(this);
    this.handlePkClose = this.handlePkClose.bind(this);
  }
  componentWillMount(){
    this.props.onConnect();

  }
 
  render(){
      if(this.props.value.data!=undefined){
        var data=JSON.parse(this.props.value.data.data);
        if(data.state == 0 && data.type == "changeState"){
          return(
            <div>
              <TopBarContainer/>
              <div className="pk-content">
                  <img    className="pk-search-img" src="//yzyxw.oss-cn-shanghai.aliyuncs.com/pic/pk1.png" alt=""/>
                  <button  className="pk-search" onClick={this.search}>匹配对手</button>            
              </div>
              <FloatingActionButton className="pk-back" backgroundColor="#161616"><Link to="battle">返回</Link></FloatingActionButton>
            </div>
          )
        }else if(data.type == "changeState" && (data.state == 3  || data.state == 1)){
          return(
            <div>
              <TopBarContainer/>
              <div className="pk-content">
                  <div className="pk-member"></div>
                  <button  className="pk-ready" onClick={this.ready}>准备</button>            
              </div>
              <FloatingActionButton className="pk-back" backgroundColor="#161616"><Link to="battle">返回</Link></FloatingActionButton>
            </div>
          )
        }else if(data.type=="doError"){
          return (
            <div>
              <TopBarContainer/>
              <div>没有体力了</div>              
            </div>
          )
        }else if(data.type=="roomMsg" && data.msgType == 2){
          return (
            <div>
              <TopBarContainer/>
              <div className="pk-content">
                  <p>... 加载中 ...</p> 
              </div>
              <FloatingActionButton className="pk-back" backgroundColor="#161616"><Link to="battle">返回</Link></FloatingActionButton>
            </div>
          )
        }else if(data.type=="roomStateChange" && data.state == 1){
          return(
                  <div>
                    <TopBarContainer/>       
                    <div className="pk-question">       
                      <div className="pk-question-title">{data.userInfo[0].user.username+"--"+data.userInfo[0].user.level+"vs"+data.userInfo[1].user.username+"--"+data.userInfo[1].user.level}</div>
                      </div>
                    </div>
            )
        }else if(data.type == "newQuestion"){
          var answer=data.answer.split("||");
          return(
            <div>
              <TopBarContainer/>       
              <div className="pk-question">       
                <div className="pk-question-title">{data.content}</div>
                <ul className="pk-question-answer" >
                    {answer.map(function(data) {
                      return <li key={data} onClick={this.answer}>{data}</li>
                    },this)}
                </ul>
              </div>
            </div>
            )
        }else if(data.type == "doFinish"){
          return (
            <div>
                <TopBarContainer/>              
                <div className="pk-doFinish">正在统计最终结果，请稍后...</div>
            </div>
          )

        }else if(data.type == "roomClosed"){
          var winner=data.winner;
          return(
            <div>
              <TopBarContainer/>              
              <RefreshIndicator loadingColor="#161616" color="#161616" size={50} left={170} top={220} status="loading" style={style.refresh}/>
            </div>
            )  
        }else if(data.type == "doWin"){
          
          return(
            <div>
              <TopBarContainer/>              
              <div className="pk-doWin-title">恭喜你获得胜利！</div>
              <button className="pk-btn" onClick={this.handlePkClose}>确定</button>
            </div>
          )
        }else if(data.type == "doLose"){
          
          return(
            <div>
              <TopBarContainer/>              
              <div className="pk-doLose-title">失败乃兵家常事，请大侠重新来过</div>
              <button className="pk-btn" onClick={this.handlePkClose}>确定</button>
            </div>
          )
        }else{
          return ( 
            <div>
              <TopBarContainer/>              
              <RefreshIndicator loadingColor="#161616" color="#161616" size={50} left={170} top={220} status="loading" style={style.refresh}/>
            </div>
            )
        }

      }else{
        return false;
      }
  }
  search(){
    this.props.onSearch();
  }
  ready(){
    this.props.onReardy();
  }
  answer(e){
    let myRex=/[A-Za-z]/;
    let answer=e.target.innerHTML;
    let newAnswer=myRex.exec(answer)[0];
    this.props.onAnswer(newAnswer);
  }
  //pk完毕确认按钮
  handlePkClose(){
    browserHistory.push('/home');       
  }
}

export default Pk
