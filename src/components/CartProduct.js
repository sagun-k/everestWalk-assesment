import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {Link} from "react-router-dom"
const CartProduct = () => {
    const {products,totalQuantities} =useSelector((state)=>state.CartReducer)
    const dispatch= useDispatch()

    

 
    return (<>
      {products.length>0? <> {products.map((product)=>{
             const pricewithoutDollar=product.price.slice(1,product.price.length)
             const priceInt=parseInt(pricewithoutDollar)
             const priceInRs=priceInt*119
             const priceArray=[priceInRs]
             console.log(priceArray.sort())
             
             const [quantity, setQuantity]=useState(1)
             let initialstate=product.stock
             const [stocks,setStocks]=useState(initialstate)
          
            return(
                <div key={product.id} className="mx-2" >
                <div  className="max-w-sm mx-2 h-auto  rounded overflow-hidden shadow-xl delay-100 hover:shadow-slate-500 hover:shadow-2xl transition hover:-translate-y-1">
                    <div>
                        <h1>{product.createDate[0]}</h1>
                    </div>
                   
<img  className="w-11/12 mx-auto  mt-2 h-32 md:h-52 " src={`https://electronic-ecommerce.herokuapp.com/${product.image}`} alt="Sunset in the mountains"/>
<div className="px-6 py-4 grid grid-row-3">
<div className=" row-start-1 row-end-2  mb-2">
    <h1 className="text-md md:text-lg font-bold">{product.name}</h1>
    
    </div>
    
    <div className="" >
        <h1 className="text-sm md:text-md font-semibold text-green-400">Rs:{priceInRs}</h1>
    </div>
  
    <div>
        <h1 className="text-xs md:text-md" >Category:</h1>
        <h1>{product.category}</h1>
    </div>
    <div>
        <h1 className="text-xs md:text-sm text-gray-700">Stock:{stocks}</h1>
        
    </div>
    <div className=" w-full  flex ">
        <div className="w-full disabled:opacity-10 bg-red-500 mx-1 ">
          <button disabled={totalQuantities==1?true:false}  onClick={()=>{
           dispatch({type:"DEC",payload:product.id})
           setQuantity(quantity-1)
           setStocks(stocks+1)
          }}  > - </button>
        </div>
        <div>
        <h1>Quantitiy:{quantity}</h1>
        </div>
        <div className="mx-1 w-full  disabled:opacity-10 bg-green-600">
            <button
             disabled={stocks==0?true:false}
            onClick={()=>{
                dispatch({type:"INC",payload:product.id})
                setQuantity(quantity+1)
                setStocks(stocks-1)
            }}
            >+</button>
        </div>
    </div>
    <div className=" mt-2 md:text-center w-full">
        <button 
        onClick={()=>{
            dispatch({type:"REMOVE_FROM_CART", payload:product.id})
        }}
         className="  md:h-6 md:w-8/12 text-sm text-center  bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-700">
             <div className=" w-11/12 mx-auto flex">
             <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-trash mt-1" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
             <span>Remove</span> </div></button>
            
         </div>
        
</div>

</div>
        </div> 
            )
        })}
        </>:<><div  >
            <h1>No products in your cart <span className="underline" ><Link to="/">Click here to Shop </Link></span></h1>
            
       
        </div>   
        </>}
        <div>
            
        </div>
        </>
    )
}

export default CartProduct
