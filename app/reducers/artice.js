import {GETARTICLEMORE,GETARTICLELIST} from '../actions'

export default function toArtice(state={isLogin:false},action){
  switch (action.type) {
    case GETARTICLEMORE:
       return {
         ...state,
         moreData: action.data
      }
    case GETARTICLELIST:
       return {
         ...state,
         listData: action.data
      }
    default:
      return state
  }
}
