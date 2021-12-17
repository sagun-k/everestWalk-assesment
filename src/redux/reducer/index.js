import {combineReducers} from "redux"

import {ProductReducer} from "./ProductReducer"
import {CartReducer} from "./CartReducer"
import {PQReducer} from "./PQReducer"


const reducers=combineReducers(
  {  ProductReducer,
    CartReducer,
    PQReducer
  }
    )

export default reducers