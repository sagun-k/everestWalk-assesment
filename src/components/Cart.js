import React from 'react'
import { useSelector } from "react-redux"
import CartProduct from "./CartProduct"
import ChcekOutBox from './ChcekOutBox'

const Cart = () => {
    const {products}=useSelector((state)=>state.CartReducer)
    console.log(products)
    
    return (<>
        <div className="w-full inline-block mt-32 " >
        <h1 className="text-center text-bold text-md md:text-4xl text-teal-800 mt-2 mb-2" >Your Cart</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 w-11/12 md:10/12 mx-auto gap-2" >
     
        <CartProduct/>
  
        </div>
        <div className="w-2/4 mx-auto mt-8 mb-8">
            <ChcekOutBox/>
        </div>
    </div>
    </>
    )
}

export default Cart
