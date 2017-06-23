import React from 'react';
import {Link,hashHistory } from 'react-router';
import Nav from '../Nav';
import TopBarContainer from '../../containers/TopBarContainer';
import './style.scss';
import {getUrl} from '../../utils/tool';

class ArticeMore extends React.Component{
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    let id= getUrl("id");
    if(id){
      this.props.onGetArticleMore(id);
    }
  }
  render(){

    if(this.props.value===undefined){
      return(
        <div className="ArticeMore">
          <TopBarContainer/>
          <Nav/>
          
        </div>
      )
    }else{
		  let author=this.props.value.author.split("|")[1];
      return(
        <div className="ArticeMore">
          <TopBarContainer/>
          <Nav/>
          <div className="ArticeMore-title">{this.props.value.title}</div>
          <div className="ArticeMore-author">{author}</div>          
          <div className="ArticeMore-content">{this.props.value.content}</div>  
          <Link to={"comment?id="+this.props.value.id}>
            <div className="ArticeMore-other">
              <div className="upLine"/>
              <div className="comment">
                <div className="l">19条评论</div>
                <div className="r"><img src="//yzyxw.oss-cn-shanghai.aliyuncs.com/pic/next.png" alt=""/></div>
              </div>
            </div>              
          </Link>
        </div>
      )
    }
  }
}

export default ArticeMore
