import React from 'react';
import { render } from 'react-dom';
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Wait from './components/Wait';
import MineError from './components/MineError';
import Test from './components/Test';
import Battle from './components/Battle';
import Check from './components/Check';
import MyMessages from './components/MyMessages';
import MyEdit from './components/MyEdit';
import TeaRoom from './components/TeaRoom';
import MyCollection from './components/MyCollection';
import Comment from './components/Comment';


import LoginContainer from './containers/LoginContainer';
import HomeContainer from './containers/HomeContainer';
import RegisterContainer from './containers/RegisterContainer';
import PassContainer from './containers/PassContainer';
import PkContainer from './containers/PkContainer';
import RankContainer from './containers/RankContainer';
import MyCenterContainer from './containers/MyCenterContainer';
import ArticeContainer from './containers/ArticeContainer';
import TeaRoomContainer from './containers/TeaRoomContainer';



import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Link ,IndexRoute ,hashHistory,browserHistory  } from 'react-router';

import rootReducer from 'reducers';
import * as actionCreators from 'actions';

import 'bootstrap/scss/bootstrap.scss';
import './app.scss';

 // create store with middlewares
 const store = createStore(
   rootReducer,
   applyMiddleware(thunk)
 )

const App=()=>{
  return(
    <MuiThemeProvider>
      <Router history={browserHistory}>
              <Route path="/" component={HomeContainer}/>
              <Route path="/login" component={LoginContainer}/>
              <Route path="/home" component={HomeContainer}/>
              <Route path="/battle" component={Battle}/>
              <Route path="/pk" component={PkContainer}/>
              <Route path="/pass" component={PassContainer}/>
              <Route path="/register" component={RegisterContainer}/>
              <Route path="/wait" component={Wait}/>  
              <Route path="/mineError" component={MineError}/>                                     
              <Route path="/test" component={Test}/>       
              <Route path="/rank" component={RankContainer}/>     
              <Route path="/check" component={Check}/>
              <Route path="/mycenter" component={MyCenterContainer}/> 
              <Route path="/mymessages" component={MyMessages}/> 
              <Route path="/myedit" component={MyEdit}/> 
              <Route path="/tearoom" component={TeaRoomContainer}/> 
              <Route path="/mycollection" component={MyCollection}/>                                  
              <Route path="/articemore" component={ArticeContainer}/>     
              <Route path="/comment" component={Comment}/>                                       
      </Router>
    </MuiThemeProvider>
  )
}
// create root component based on component Deskmark
// const App = connect(
//   state => ({ state }),
//   dispatch => ({
//     actions: bindActionCreators(actionCreators, dispatch),
//   })
// )(LoginContainer);

// create DOM container
const container = document.body.appendChild(
  document.createElement('div')
);

container.id="app"

// render root conponent with store to DOM container
render((
  <Provider store={store}>
    <App/>
  </Provider>
), container);
