import {ActionTypes} from "../actionTypes/ActionTypes"

const initialstate={
    products:[],
    
    

}



export const ProductReducer=(state=initialstate,{type,payload})=>{
  switch(type){
  case ActionTypes.SET_PRODUCT:
      return {...state, products: payload}
    default:
        return state
  }
}




























 