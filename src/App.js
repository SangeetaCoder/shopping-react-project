
import React from "react"
import "./App.css"
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import Products from "./component/Products"
import About from "./component/About"
import Contact from "./component/Contact"
import Login from "./component/Login"
import Register from "./component/Register"
import Cart from "./component/Cart"
import Search from "./component/Search"
 import Checkout from "./component/Checkout"
import Product from "./component/Product"




import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Switch
} from "react-router-dom";


export default function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/home" element={<Home />}></Route> 
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
           <Route exact path="/register" element={<Register />}></Route> 
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          {/* <Route exact path="/Footer" element={<Footer />}></Route>  */}
          <Route exact path="/products/:id" element={<Product />}></Route>
        </Routes>
    </>
  )
}