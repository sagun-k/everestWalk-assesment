import React,{useState} from 'react'
import { useSelector} from "react-redux"
import {Link} from "react-router-dom"
const ChcekOutBox = () => {
    const {totalQuantities,totalPrice}=useSelector((state)=>state.CartReducer)
    
    
    return (
        <>
            <div className="bg-cyan-600 md:w-8/12  shadow-2xl w-11/12 mx-auto">
                <div className="text-white p-4">
          <h1>totalQuantities:{totalQuantities}</h1>
          <h1>totalPrice:{totalPrice}</h1>
          <div className="mt-4   mb-4 inline-block text-center w-2/4 mx-auto " >
         <Link to="/checkout"> <button className="hover:text-cyan-600 w-full  hover:bg-gray-200 border-2 border-white disabled:opacity-25" disabled={totalQuantities<=0?true:false}>Checkout</button></Link>
          </div>
          </div>

          </div>
        </>
    )
}

export default ChcekOutBox
