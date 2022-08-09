import React, { useContext } from 'react'
import { useState } from 'react';
import { decodeToken } from 'react-jwt';
import { Link ,useLocation, useNavigate} from 'react-router-dom';
import AuthContext from '../context/auth-context';

export default function Details() {
  const [quantity, setquantity] = useState(1);
  const location = useLocation();
  const {isLoggedIn} = useContext(AuthContext);
  const Navigate = useNavigate();
  const cartHandler = () => {
    if(!isLoggedIn){
      window.alert('Logging in first');
      Navigate('/login');
      return;
    }
    
    const {id: userId} = decodeToken(localStorage.getItem('token'));
    const {id,itemName, description,price,image,type,weight} = location.state;
    const item = {
      itemName,
      description,
      price,
      image,
      type,
      quantity: quantity,
      weight,
      userId,
      objectId: id
    }
    fetch('/cart' , {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(item)
  }).then(response => response.json().then(
    result => window.alert(result.message)
  ))
  }

  const buyNowHandler = () => {
    if(!isLoggedIn){
      window.alert('Logging in first');
      Navigate('/login');
      return;
    }
    const {id} = decodeToken(localStorage.getItem('token'))
    const {itemName, description,price,image,type,weight} = location.state;
    const item = [{
      itemName,
      description,
      price,
      image,
      type,
      quantity: quantity,
      weight,
      userId: id
    }]
    Navigate('/address',{state: item});
  }

  const clickIncreaseHandler = () => {
    if(quantity<location.state.quantity)
    setquantity((prevState)=> prevState +1);
  }
  const clickDecreaseHandler = () => {
    if(quantity>1)
    setquantity((prevState)=> prevState -1);
  }

  return (

    <div className="detail-page">
      <div className="container productPage col-12">
          <div className='productPageLeft my-5 col-5 px-3 py-5' style={{backgroundImage: `url(${location.state.image})`}}> 
          </div>
          <div className="productPageRight my-5 col-7 p-5">
            <h2>{location.state.itemName}</h2>
            <p className='py-3'>{location.state.description}</p>
              <p><span className="price">&#x20B9;{location.state.price}</span> | <span className="in-stock">In stock</span> </p>
              <form>
                <span href="#" className='px-2 py-1 mx-2' onClick={clickIncreaseHandler} style={{border: '1px solid black'}}>+</span>
                <input className='col-2' type="text" value={quantity} readOnly/>
                <span href="#" className='px-2 py-1 mx-2' onClick={clickDecreaseHandler} style={{border: '1px solid black'}}>-</span>
                </form><br />
              <button onClick={cartHandler} className="btn btn-warning">Add to Cart</button>
              <button onClick={buyNowHandler} className="btn btn-success mx-2 px-4">Buy Now</button>
          </div>
      </div>
    </div>

  )
}
