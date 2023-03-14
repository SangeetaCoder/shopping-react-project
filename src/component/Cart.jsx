import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {delCart} from '../redux/action/index';


import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route,
    Switch
  } from "react-router-dom";


const Cart=()=>{
    // add item in cart
    // const state=useSelector((state)=>state.handleCard)


    const state=useSelector((state)=>state.handleCard)
    const dispatch=useDispatch()
     
    //delete item
    const handleClose=(item)=>{
         dispatch(delCart(item))
    }

    const cartItem=(cartItem)=>{
        return (
         <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
            <div className="container py-4">

                <button onClick ={()=>handleClose(cartItem)}className="btn-close float-end" aria-label="close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4 d-flex me-4 py-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="200px"/>
                            <h3 >{cartItem.title}</h3>
                            <p className="lead fw-bold"> Rs.{cartItem.price*10}</p> 
                        </div> 
                    </div>
                
            </div>
         </div>
        )
    }

  //empty cart message
  const emptyCart=()=>{
    return(
        <>
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
            <div className="row">
                <h3>your cart is empty</h3>
            </div>
            </div>
               </div>
            </>
    );
  }


  const button =()=>{
    return(
        <div className="container ">
            <div className="row ">
             <Link to="/checkout" className='btn btn-outline-primary mb-5 w-25 mx-auto'>Proceed to checkout</Link>   
            </div>
        </div>
    )
  }


    return (
        <>
      {/* <div className="" button>
                            <Link to="/card" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>Card ({state.length})</Link>
                        </div> */}

                        {/* show product in cart */}
                       {  state.length !==0 && state.map(cartItem)}
                       

                       {state.length===0 && emptyCart()}    
                       {state.length!==0 && button()}
           
                      


        </>
    )
}
export default Cart;