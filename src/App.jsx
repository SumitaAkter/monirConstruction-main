import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Index from './Pages/Index'
import Footer from './Components/Footer/Footer'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import Checkout from './Pages/Checkout'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Projects from './Pages/Projects'
import ExtraInfo1 from './Pages/ExtraInfo1'
import ExtraInfo2 from './Pages/ExtraInfo2'
import ExtraInfo3 from './Pages/ExtraInfo3'
import Flatesell from './Pages/Flatesell'
import FlateDetails from './Pages/FlateDetails'




function App() {
  return (
    <>
    
      <Nav />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/about' element={<About />} />
        <Route path="/get-quote" element={<Contact/>} />
        <Route path='/services' element={<Service />} />
        <Route path='/ExtraInfo1' element={<ExtraInfo1 />} />
        <Route path='/ExtraInfo2' element={<ExtraInfo2 />} />
        <Route path='/ExtraInfo3' element={<ExtraInfo3 />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/flats-for-sale' element={<Flatesell />} />
        <Route path='/flatDetails/:id' element={<FlateDetails />} />
      </Routes>
      <Footer />
      
    </>
  )
}

export default App
