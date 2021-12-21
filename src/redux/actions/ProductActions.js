import { ActionTypes  } from "../actionTypes/ActionTypes"


export const SetProduct=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCT,
        payload:products
    }
}
export const SetLaptop=(products)=>{
    return{
        type:ActionTypes.SET_LAPTOP,
        payload:products
    }
}

export const SelectedProduct=(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}