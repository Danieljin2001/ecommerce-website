import React from 'react'
import {Routes, Route} from 'react-router-dom' //routes is multiple routes
import Collections from './pages/Collections'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Home from './pages/Home'
import About from './pages/About'
import Content from './pages/Content'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Orders from './pages/Orders'

const App = () => {
  return (
    //className is set to this to adjust for different screen sizes
    //Routes are initialized here
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collections" element={<Collections/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/content" element={<Content/>}/>
        <Route path="product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/orders" element={<Orders/>}/>



      </Routes>
    </div>
  )
}

export default App
