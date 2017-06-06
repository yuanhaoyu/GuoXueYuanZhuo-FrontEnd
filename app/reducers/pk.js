import {PKCONNECT,PKSEND} from '../actions'

export default function toPk(state={},action){
  switch (action.type) {
    case PKCONNECT:
      return {
        ...state,
        data:action.data
      };
    default:
      return state;
  }
}
