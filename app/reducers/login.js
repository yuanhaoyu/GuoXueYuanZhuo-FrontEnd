import {LOGIN} from '../actions'

export default function toLogin(state={isLogin:false},action){
  switch (action.type) {
    case LOGIN:
      if(action.isLogin){
        state.isLogin=true;
        state.data=action.data;     
      }
      return state
    default:
      return state
  }
}
