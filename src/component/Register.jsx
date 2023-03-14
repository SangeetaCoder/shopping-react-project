import React, { useState } from "react";
// import { Form, Alert } from "react-bootstrap";
import Login from "./Login";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const [data,setData]=useState([]);

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    const result=[
      {email:email,pwd:password}
    ]
    setData((t)=>[...t,result[0]]);
    console.log(result[0]);

   

    if (!name || !email || !password || !phone || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem("sanskarPassword", JSON.stringify(password));
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <>
      <div > 
     
        {" "}
        {login ? (
          <form onSubmit={handleFormSubmit} style={{margin:'150px',border:'2px solid blue',boxShadow:'2px 2px .5px .6px gold' }} >
            <h3 style={{margin:'20px'}}>Register</h3>

            <div className="form-group" style={{margin:'20px'}}>
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                name="name"
                onChange={(event) => setName(event.target.value)}
                style={{border:'1px solid blue'}}
              />
            </div>

            <div className="form-group" style={{margin:'20px'}}>
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
                style={{border:'1px solid blue'}}
              />
            </div>

            <div className="form-group" style={{margin:'20px'}}>
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
                style={{border:'1px solid blue'}}
              />
            </div>

            <div className="form-group" style={{margin:'20px'}}>
              <label>Phone No.</label>
              <input
                type="Phone"
                className="form-control"
                placeholder="Enter contact no"
                onChange={(event) => setPhone(event.target.value)}
                style={{border:'1px solid blue'}}
              />
            </div>

            <div className="form-group" style={{margin:'20px'}}>
              <label>Choose your Profession</label>
              <select
                onChange={(event) => setProfession(event.target.value)}
                style={{border:'1px solid blue'}}
              >
                <option>Select</option>
                <option>Artist</option>
                <option>Photographer</option>
                <option>Team Player</option>
                <option>Full Stack</option>
              </select>
            </div>
          
          
            <button type="submit" className="btn btn-primary btn-lg btn-block" style={{margin:'20px'}}>
              Register
            </button>

          
          
          
            <p onClick={handleClick} className="forgot-password text-right" style={{margin:'20px'}}>
              Already registered log in?
            </p>
            {flag && (
              
              alert("I got it you are in hurry! But every Field is important!")  
              
            )}
          </form>
        ) : (
          <Login />


        )}
         {/* <table border='1'>
        <tr>
          <td>email</td>
          <td>password</td>
        </tr>
        {
          data.map((item)=>
          <>
          <tr>
          <td>{item.email}</td>
          <td>{item.pwd}</td>
          </tr>
          </>)
        }
        </table> */}
       
      </div>
    </>
  );
}

export default Registration;