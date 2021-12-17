import React from 'react'
import { useSelector,useDispatch } from "react-redux"

const product = () => {
    const products=useSelector((state)=>state.ProductReducer.products)
    const dispatch = useDispatch()
   console.log(products)
    // const imgStyle={
    //     height:"7.5rem",
    //     width:"100%"
    // }
    // const cardStyle={
    //     height:"22rem",

    // }

   var today=new Date(1639747391767);
   console.log(today)
    
    return (
        <>{products.map((product)=>{
            const pricewithoutDollar=product.price.slice(1,product.price.length)
            const priceInt=parseInt(pricewithoutDollar)
            const priceInRs=priceInt*119
            var fetchDate=product.createDate
            var today = new Date(fetchDate);
            var formatDate=today.toDateString()
            console.log(formatDate)
    
            
            
           
           
            return (<div key={product.id} className="mx-2" >
                    <div  className="max-w-sm mx-2 h-auto  rounded overflow-hidden shadow-xl delay-100 hover:shadow-slate-500 hover:shadow-2xl transition hover:-translate-y-1">
                        <div className="text-xs">
                            <h1>{formatDate}</h1>
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
            <h1 className="text-xs md:text-sm text-gray-700">Stock:{product.stock}</h1>
            
        </div>
        <div className=" mt-2 md:text-center w-full">
            <button 
            onClick={()=>{
               dispatch({type:"ADD_TO_CART",payload:product})
            }} 
             className="md:h-6 md:w-8/12 text-sm  bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-700">Add to cart</button>
             </div>
  </div>
  
</div>
            </div>)
        })}</>
    )
}

export default product
