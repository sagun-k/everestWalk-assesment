import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from "react-redux"
import axios from "axios"
import {SetProduct} from "../redux/actions/ProductActions"
import Product from "./Product"
const productList = () => {
    const products=useSelector((state)=>state)
    const dispatch=useDispatch();
    
    const fetchProducts=async ()=>{
        const response = await axios.get("https://electronic-ecommerce.herokuapp.com/api/v1/product").catch((error)=>{
            console.log("Error:",error)
        })
        dispatch(SetProduct(response.data.data.product))
        // const filtering=response.data.data.product.filter(product=>product.category[1]==="laptop")
        console.log(response)
        // console.log(filtering)
        
    }
    const filterFetch= async ()=>{
        const response = await axios.get("https://electronic-ecommerce.herokuapp.com/api/v1/product").catch((error)=>{
            console.log("Error:",error)
        })
        const filtering=response.data.data.product.filter(product=>product.category[1]==="laptop")
        dispatch(SetProduct(filtering))
        console.log(filtering)
    }
    
   const allproducts=useSelector((state)=>state.ProductReducer.products)

    console.log("line28",allproducts)
//    const [data,setData]=useState(allproducts)
   let filteredData = allproducts.filter((product)=>product.category[1]==="laptop")
   console.log(filteredData)
   const [useIt,setUseit]=useState(true)
    const handleClick= ()=>{
        let filteredData = allproducts.filter((product)=>product.category[1]==="laptop")
    
        dispatch(SetProduct(filteredData))
        console.log("filteredData",filteredData)
        setUseit(false)
    
    }
    
    if(useIt==true){
     useEffect(()=>{
        fetchProducts()
        
         
     },[])}else{
         useEffect(()=>{
             filterFetch()
         })
     }
    // useEffect(()=>{
    //   setData(allproducts)
    // //    fetchProducts()
    
    // //    filterFetch()
      
      
    // },[allproducts])
   
    
    return (
        <>
        <div className="w-full mt-40  inline-block z-0" >
            <button onClick={()=>
            {handleClick}
        } >Click here</button>
        <div className="  mb-4 text-center">
        <label htmlFor="filter">Sort Products By: </label>
        <select  defaultValue="all" > 
          <option value="all" >All</option>
          <option value="laptop" >Laptop</option>
          <option value="mobile">Mobiile</option>
        </select>
      </div>
            <div className="grid grid-cols-2 md:grid-cols-4 w-11/12 md:10/12 mx-auto gap-2" >
            <Product />
           
            </div>
        </div>
        </>
    )
}

export default productList
