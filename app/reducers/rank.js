import {GETRANK} from '../actions'

export default function toGetRank(state={},action){
  switch (action.type) {
    case GETRANK:
      return {
        ...state,
        rankData: action.data
      }
    default:
      return state
  }
}
