import React from 'react'
import { useSelector } from "react-redux"

const product = () => {
    const products=useSelector((state)=>state.allProducts.products)
   
    
    // const renderProducts=products.map((product)=>{
    //     const {id,name,price,stock,category}=products
    //     return(
    //         <div key={id} >
    //             <div>
    //             <div>
    //                <h1>{name}</h1>
    //                <h2>{price}</h2>
    //             </div>
    //             </div>
    //         </div>
    //     )
    // })
    const imgStyle={
        height:"7.5rem",
        width:"100%"
    }
    const cardStyle={
        height:"22rem",

    }
   let d="1a234av"
   let c= parseInt(d)
   let a=parseInt(c)*4
   console.log(c)
   console.log(a)

    
 
    return (
        <>{products.map((product)=>{
            const pricewithoutDollar=product.price.slice(1,product.price.length)
            const priceInt=parseInt(pricewithoutDollar)
            const priceInRs=priceInt*119
            return (<div key={product.id} className="mx-2" >
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
            <h1>Category:{product.category}</h1>
        </div>
        <div>
            <h1 className="text-xs md:text-sm text-gray-700">Stock:{product.stock}</h1>
            
        </div>
        <div className=" mt-2 text-center w-full">
            <button className="w-full md:h-6 md:w-8/12 text-sm md:text-md  mx-auto bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-700">Add to cart</button>
             </div>
  </div>
  
</div>
            </div>)
        })}</>
    )
}

export default product
