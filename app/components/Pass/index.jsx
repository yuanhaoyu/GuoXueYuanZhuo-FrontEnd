import React from 'react';
import { Link } from 'react-router';
import './style.scss';
import Check from '../Check';
import MineError from '../MineError';
import Wait from '../Wait';
import {isEmpty} from '../../utils/tool';
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

var passAnswer="";

class Pass extends React.Component{
  constructor(props) {
    super(props);
    this.handleChoose = this.handleChoose.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);    
    this.handleSubmit2 = this.handleSubmit2.bind(this);
  }
  componentWillMount(){
    this.props.onResetError();
    if(this.props.question==undefined ){
      this.props.onGetQuestions()
    }
  }
  componentDidUpdate(){
    if(this.props.nextFlag){
      this.props.onGetQuestions()      
    }
  }  
  render(){
    if(this.props.resultFlag===false){
      return(
        <div className="pass" style={style.container}>
          <MineError title="闯关失败"/>
        </div>
      )
    }
    if(this.props.question==undefined){
      return(
          <div className="pass">
            <RefreshIndicator loadingColor="#161616" color="#161616" size={50} left={170} top={220} status="loading" style={style.refresh}/>
          </div>
      )
    }
    if(!isEmpty(this.props.question)){
      return(
          <div className="pass">
            <TopBarContainer/>
            <div className="lastQuestion">更多题目等待解锁</div>
            <FloatingActionButton className="back" backgroundColor="#161616"><Link to="battle">返回</Link></FloatingActionButton>
          </div>
      )
    }
    var answer=this.props.question.answer.split("||");
    if(this.props.question.type==1){
      return(
          <div className="pass">
            <TopBarContainer/>
            <div className="pass-content">
              <div className="pass-title">关卡：{this.props.question.level} （选择题）</div>
              <div className="pass-q" >{this.props.question.content}</div>
              <div className="pass-a">
                <ul className="answer" >
                  {answer.map(function(data) {
                    return <li key={data} onClick={this.handleChoose}>{data}</li>
                  },this)}
                </ul>
              </div>
              <button  onClick={this.handleSubmit1}>确定</button>            
            </div>
            <FloatingActionButton className="back" backgroundColor="#161616"><Link to="battle">返回</Link></FloatingActionButton>
          </div>
      )
    }else if(this.props.question.type==2){
      return(
          <div className="pass">
            <ul>
              <li dangerouslySetInnerHTML={{__html: this.props.question.content}}>关卡：{this.props.question.level}（填空题）</li>
              <li>{this.props.question.content}</li>                        
            </ul>
            <textarea name="" id="" cols="30" rows="10" ref="answer"></textarea>
            <button onClick={this.handleSubmit2}>确定</button>
          </div>
      )
    }
  }
  //绑定选择选项
  handleChoose(e){
    let myRex=/[A-Za-z]/;
    let answer=e.target.innerHTML;
    let newAnswer=myRex.exec(answer);
    let lastNode=document.querySelector(".active");
    if(lastNode!==null){
      lastNode.className="";
    }
    e.target.className="active";
    passAnswer="";
    passAnswer=newAnswer[0];
  }
  //提交选择题答案
  handleSubmit1(){
    let id = parseInt(this.props.question.id);
    let answer = passAnswer.trim()
    this.props.onCommitQuestions(id,answer)
  }
  //提交问答题答案
  handleSubmit2(){
    let id = parseInt(this.props.question.id);
    let answer = this.refs.answer.value.trim()
    this.props.onCommitQuestions(id,answer)
  }

}

export default Pass
