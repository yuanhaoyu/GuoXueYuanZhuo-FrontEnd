import {GETUSERINFO} from '../actions'

export default function toUser(state={},action){
  switch (action.type) {
    case GETUSERINFO:
      return {
          ...state,
          data:action.data
        }
    default:
      return state
  }
}
