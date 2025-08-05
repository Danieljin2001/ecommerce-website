import React from 'react'
import {Routes, Route} from 'react-router-dom' //routes is multiple routes
import Collection from './pages/Collection'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Home from './pages/Home'
import About from './pages/About'
import Content from './pages/Content'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'

const App = () => {
  return (
    //className is set to this to adjust for different screen sizes
    //Routes are initialized here
    //navbar is used here so that it can be shown on all pages
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' >
      <Navbar className=''/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collection" element={<Collection/>}/>
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
