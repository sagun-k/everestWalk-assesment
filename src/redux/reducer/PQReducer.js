

const initialstate={
    totalQuantity:0,
    totalPrice:0
}

                

export const PQReducer=(state=initialstate,action)=>{
  switch(action.type){
      case "QUANTITY_CHANGE":
        const {product,quantity} = action.payload
        product.quantity=quantity
        const TotalPrice=state.totalPrice*quantity
        const TotalQuantity=state.totalQuantity+quantity
        return{
          ...state,totalQuntitiy:TotalQuantity,totalPrice:TotalPrice
        }
      default: 
      return state

  }

}