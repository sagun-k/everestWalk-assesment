import React from 'react'
import './App.css';
import Header from './components/Header'
import {Routes,Route} from "react-router-dom"
import ProductList from './components/ProductList'
function App() {
  return (
   
<div>
  
  <Header/>
 

  
 <Routes>
   <Route exact path="/" element={<ProductList/>}/>
 </Routes>

  </div>
    
  );
}

export default App;
