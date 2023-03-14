import React, {useEffect,useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';
 import {useDispatch} from 'react-redux';
 import { addCart,delCart } from '../redux/action';

const Product=()=>{

    const {id}=useParams();
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false);
    const [cartBtn,setCartBtn]=useState("Add to Card")


     const dispatch = useDispatch();

    //  add and remove item toggle button using dispatch

     const addProduct=(product)=>{
        dispatch(addCart(product)); 
   
     
        if(cartBtn === "Add to Cart"){
            dispatch(addCart(product)); 
             setCartBtn("Remove from Card")
         }else{
             dispatch(delCart(product)); 
            setCartBtn("Add to Cart")
        }
       
     }

     
       
     //fetch All Product and using Skeleton loading 
     // single product detail after click buy now

   useEffect(()=>{
const getProduct= async()=>{
    setLoading(true);
    const response=await fetch(`https://fakestoreapi.com/products/${id}`);
    setProduct(await response.json());
    setLoading(false);
}

    getProduct();
   },[])
 const Loading=()=>{
    return(
        <>
        <div className="col-md-6">
            <Skeleton height={500} />
        </div>
        <div className="col-md-6 " style={{lineHeight:2}}>
            <Skeleton height={50} width={300} />
            <Skeleton height={75}  />
            <Skeleton height={25}  width={150}/>
            <Skeleton height={50}  />
            <Skeleton height={150}  />
            <Skeleton height={50}  width={100} />
            <Skeleton height={50}  width={100} style={{marginLeft:6}} />
        </div>
        </>
    ) 
 } 
const ShowProduct=()=>{
    return(
        <> 
        <div className="col-md-12 d-flex ">
            <div className="row me-4 ">
                <img src={product.image} alt={product.title} height="400px"
                width="400px" />
            </div>
        
            <div className="col-md-6 ">
                <h4 className="text-uppercase text-black-50">
                    {product.category}
                </h4>
                <h3 className="display-5">{product.title}</h3>
                <p className='lead fw-bolder'>
                    Rating:{product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                </p>
         <h3 className='display-6 fw-bold '>Rs. {product.price*10}</h3>
            
            <h3 className='lead py-3'>{product.description}</h3>

<button className='btn btn-outline-dark px-4 py-2' onClick={()=>addProduct(product)}>{cartBtn}</button>
<Link to ="/home" className='btn btn-dark ms-2 px-3'>Go to Home</Link>

            </div>
        </div>
        </>
    ) 
}
    return (
        <div>
        <div className="container py-5">
            <div className="row py-5">
                {loading? <Loading />:<ShowProduct />}
            </div>
        </div>
        </div>
    )
}
export default Product;