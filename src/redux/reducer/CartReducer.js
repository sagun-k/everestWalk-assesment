

const initialstate = {
    products:[],
    totalPrice:0,
    totalQuantities:0,
}

export const CartReducer=(state=initialstate,action)=>{
  let findProduct;
    switch(action.type){
        case "ADD_TO_CART":
            const product =action.payload
          const check=state.products.find(pr=>pr.id===product.id)
          if(check){
            return state
          }
          else{
            // product.quantity=quantity
            // const TotalPrice=state.totalPrice*quantity
            // const TotalQuantity=state.totalQuantity+quantity
            let productPrice=product.price.slice(1,product.price.length)
            let productPriceInRs=parseInt(productPrice)*119
            const TotalPrice=state.totalPrice+productPriceInRs
            console.log(TotalPrice)
            return {
                ...state,products:[...state.products,product],
                totalPrice:TotalPrice,totalQuantities:state.totalQuantities+1
                // totalQuntitiy:TotalQuantity,totalPrice:TotalPrice,totalQuantity:TotalQuantity,totalPrice:TotalPrice
                
            }
          }
        case "REMOVE_FROM_CART":
          findProduct=state.products.find(product=>product.id === action.payload)
          const filteredarray=state.products.filter(product=>product.id!==action.payload)
          const findproductPrice=findProduct.price.slice(1, findProduct.price.length)
          const findproductPriceInRs=parseInt(findproductPrice)*119
          console.log("findproductPrice",findproductPriceInRs)
          // let productPrice=product.price.slice(1,product.price.length)*119
          //   const TotalPrice=state.totalPrice+parseInt(productPrice)
          return{
            ...state,products:filteredarray,totalQuantities:state.totalQuantities-1,totalPrice:state.totalPrice-findproductPriceInRs
          }
        case "INC":
          findProduct=state.products.find(product=>product.id === action.payload)
          const prodpriceInc=parseInt(findProduct.price.slice(1,findProduct.price.length))*119
          return{
            ...state,totalQuantities:state.totalQuantities+1,totalPrice:state.totalPrice+prodpriceInc
          }
        case "DEC":
          findProduct=state.products.find(product=>product.id === action.payload)
          const prodpriceDec=parseInt(findProduct.price.slice(1,findProduct.price.length))*119
    
          
          return{
            ...state,totalQuantities:state.totalQuantities-1,totalPrice:state.totalPrice-prodpriceDec
          }
          
            
        default:
            return state
    }
}
