

const initialstate = {
    products:[],
    totalQuantity:0,
    totalPrice:0
}

export const CartReducer=(state=initialstate,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            const product =action.payload
          const check=state.products.find(pr=>pr.id===product.id)
          if(check){
            return state
          }
          else{
            product.quantity=quantity
            const TotalPrice=state.totalPrice*quantity
            const TotalQuantity=state.totalQuantity+quantity
            return {
                ...state,products:[...state.products,product],totalQuntitiy:TotalQuantity,totalPrice:TotalPrice,totalQuantity:TotalQuantity,totalPrice:TotalPrice
                
            }
          }
         
            
        default:
            return state
    }
}
