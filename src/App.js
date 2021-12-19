import React from 'react'
import './App.css';
import Header from './components/Header'
import {Routes,Route} from "react-router-dom"
import ProductList from './components/ProductList'
import Cart from "./components/Cart"
import Checkout from './components/Checkout'
function App() {
  return (
   
<div>
  
  <Header/>
 

  
 <Routes>
   <Route exact path="/" element={<ProductList/>}/>
   <Route exact path="/cart" element={<Cart/>}/>
   <Route exact path="/checkout" element={<Checkout/>}/>
 </Routes>

  </div>
    
  );
}

export default App;
