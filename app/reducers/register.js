import {REGISTER} from '../actions'

export default function toRegister(state={isLogin:false},action){
  switch (action.type) {
    case REGISTER:
      if(action.isLogin){
        state.isLogin=true
      }
      return state
    default:
      return state
  }
}
