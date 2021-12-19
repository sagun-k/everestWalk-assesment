import {combineReducers} from "redux"

import {ProductReducer} from "./ProductReducer"
import {CartReducer} from "./CartReducer"



const reducers=combineReducers(
  {  ProductReducer,
    CartReducer,
 
  }
    )

export default reducers