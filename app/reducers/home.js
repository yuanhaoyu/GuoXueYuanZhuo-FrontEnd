import {GETINDEXINFO} from '../actions'

export default function toHome(state={isLogin:false},action){
  switch (action.type) {
    case GETINDEXINFO:
       return {
         ...state,
        indexData: action.data
      }
    default:
      return state
  }
}
