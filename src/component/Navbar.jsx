import React from "react";
 import {useSelector} from 'react-redux';


import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route,
    Switch
  } from "react-router-dom";

const Navbar = () => {
 // add item in cart
     const state=useSelector((state)=>state.handleCard)
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-white  py-3 shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-4" to="#">SHOPCLUES</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link "  to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/search">Search</Link>
                            </li>
                        </ul>

                        {/* <form class="d-flex" role="search" >
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>

      </form> */}

                        <div className="" button>
                            <Link to="/login" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-sign-in me-1"></i>Login</Link>
                        </div> 
                        <div className="" button>
                            <Link to="/register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>Register</Link>
                        </div>
                    
                        
                        <div className="" button>
                            <Link to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>Cart ({state.length})</Link>
                        </div>
                       
                    </div>
                  
                </div>
               
            </nav>
        </div>
    );
}

export default Navbar; 