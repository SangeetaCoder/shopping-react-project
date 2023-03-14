
import React, { useState } from "react";
// import { Alert } from "react-bootstrap";
import Home from "./Home";
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route,
    Switch
  } from "react-router-dom";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  // const [data,setData]=useState([]);


  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
     e.preventDefault();
    //  const result=[
    //    {email:emaillog,pwd:passwordlog}
    //  ]
    //  setData((t)=>[...t,result[0]]);
    //  console.log(result[0]);

    let pass = localStorage
      .getItem("sanskarPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    }
    
    else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div >
      
      
      {home ? (
        <form onSubmit={handleLogin} style={{margin:'150px',border:'2px solid blue',boxShadow:'2px 2px .5px .6px gold' }}>
          <h3 style={{margin:'20px'}}>LogIn</h3>
          <div className="form-group"style={{margin:'20px' }}>
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
              style={{border:'1px solid blue'}}
            />
          </div>

          <div className="form-group" style={{margin:'20px' }}>
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}  
              style={{border:'1px solid blue' ,justifyContent:'center'}}
             
            />
          </div>
          
          
          
        
          <button type="submit" className="btn btn-primary btn-lg btn-block" style={{margin:'20px'}}>
            Login
          </button>
          <br />
          <br />
          

          {flag && (
            
         
            console.log ("Fill correct Info else keep trying.")
          
          )}
          
        </form>
       
      ) : (
         <Home />
       
       
      )}
     
       
    </div>
  );
}

export default Login;