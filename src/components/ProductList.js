import React,{useEffect} from 'react'
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

//  console.log(response.data.data.product)
    dispatch(SetProduct(response.data.data.product))
    }
    useEffect(()=>{
       fetchProducts()
    },[])
    // console.log("Product:",products)
    return (
        <div className="w-full" >
            <div className="mt-2 mb-4 text-center" >
           <label htmlFor="filter">Sort Products By: </label>

<select >
  <option value="">Electronic</option>
  <option value="">Prtice</option>
  <option value="">Opel</option>
  <option value="">Audi</option>
</select>
</div>     
            <div className="grid grid-cols-2 md:grid-cols-4 w-11/12 md:10/12 mx-auto gap-2" >
            <Product/>
           
            </div>
        </div>
    )
}

export default productList
