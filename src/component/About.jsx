import React from "react"

import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route,
    Switch
  } from "react-router-dom";


export default function About() {
    return (
        <div>
            <div className="container py-5 my-5  ">
                <div className="row mx-auto">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                    
                     
                     <p className="lead">ShopClues is an Indian online marketplace owned by Clues Network Pvt. Ltd. It was established in July 2011 in Silicon Valley by Sanjay Sethi, Sandeep Aggarwal and Radhika Aggarwal. Based in Gurgaon, India, the company claims to have over 600,000 merchants and 28 million products on its platform, serving over 32,000 pincodes across the country.
                     </p>
              <h4>  Founded: </h4><p>July 2011; 11 years ago</p>
                
               <h4> Headquarters:</h4><p> Gurgaon, Haryana, India</p>
                
              <h4>   Industry: </h4><p>Internet</p>
                
             <h4>  Revenue:</h4><p> ₹209.46 crore (US$26 million) (2019)</p>
                   
                     
                        <div className="" button>
                            <Link to="/contact" className="btn btn-outline-primary ms-2">
                                <i className="fa fa-user-plus me-1"></i>contact us</Link>
                        </div>
                    </div>
                    <div className="col-md-6  mb-4 py-4 my-4">
                    <img src="/assets/aboutpage.jpg" alt="About us" height="400px" width="600px" />
                    </div>
                   
             </div>
            </div>
        </div>
    )
}