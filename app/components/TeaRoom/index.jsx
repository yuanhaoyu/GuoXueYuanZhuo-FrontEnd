import React from 'react';
import {Link,hashHistory } from 'react-router';
import './style.scss';
import Check from '../Check';
import Nav from '../Nav';
import Desk from '../Desk';
import Activity from '../Activity';
import Recommend from '../Recommend';
import TopBarContainer from '../../containers/TopBarContainer';

class TeaRoom extends React.Component{
  constructor(props) {
    super(props);
  }
  componentWillMount(){
		this.props.onGetArticleList(1);
  }
  render(){
		if(this.props.value===undefined){
			return(
				<div>
					<TopBarContainer/>
          <Nav/>
				</div>
			)
		}else{
			console.log(`this is ${this.props.value}`);
			console.log(this.props.value);
      return(
        <div>
          <TopBarContainer/>
          <Nav/>
					<div className="TeaRoom">
						{this.props.value.articleList.map(function(data) {
							let author=data.author.split("|")[1];
							return (
								<div key={data.id} className="TeaRoom-list">
									<Link to={"articemore?id="+data.id}>
										<div className="TeaRoom-list-title">{data.title}</div>
										<div className="TeaRoom-list-author">{author}</div>						
										<div className="TeaRoom-list-content">{data.subContent}</div>          
										<hr className="TeaRoom-list-hr"/>
									</Link>
								</div>
							)
						},this)}
        </div>
        </div>
      )
		}

  }
}

export default TeaRoom
