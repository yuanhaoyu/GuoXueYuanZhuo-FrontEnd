import {GETQUESTIONS,COMMITQUESTIONS,RESETERROR} from '../actions'


const initState = {
    data: {}
}

export default function toPass(state = initState, action){
  switch (action.type) {
    case GETQUESTIONS:
       return {
         ...state,
        questionData: action.data,
        nextFlag:false
      }
    case COMMITQUESTIONS:
       return {
         nextFlag:true,
         resultFlag:action.data
       }
    case RESETERROR:
      if(action.data){
       return {
         ...state,
         nextFlag:false,
         resultFlag:true
       }        
      }
    default:
      return {...state}
  }
}
