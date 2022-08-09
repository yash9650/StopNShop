import React, { useContext } from 'react';
import {useNavigate} from "react-router-dom";
import AuthContext from '../context/auth-context';

export default function DisplayCard(props) {
    const {isLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const electronicsData = [];

    props.itemData.map(element => {
      if (element.type === props.type1 || element.type === props.type2) {
        electronicsData.push(element);
      }
    })

    const clickHandler = (items) => {
        navigate('/details', {
          state: {
            image: items.image, 
            itemName: items.itemName,
            description: items.description,
            price: items.price,
            quantity: items.quantity,
            weight: items.weight,
            type: items.type
          }
        })
      }

      const cartHandler = (items) => {
        if(!isLoggedIn){
          window.alert('Logging in first');
          navigate('/login');
          return;
        }
        const {id} = props.currentUser;
        const {itemName, description,price,image,type,quantity,weight} = items;
        const item = {
          itemName,
          description,
          price,
          image,
          type,
          quantity: 1,
          weight,
          userId: id
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

    const card = electronicsData.map(items => {
        return <div key={items._id} className="card col-3 mx-1 my-1" style={{ width: '15rem', height: '400px' }}>
          <span className="position-absolute end-0 top-0 translate-end badge bg-dark">Sale</span>
          <img src={`${items.image}`} onClick={() => clickHandler(items)} className="mt-3" alt="Loading..." height='200px' />
          <div className="card-body" >
            <h5 className="card-title" onClick={() => clickHandler(items)}>
            {items.itemName.substring(0, Math.min(items.itemName.length, 20))}{items.itemName.length > 20 &&'...'}
            </h5>
              <p><span className="price">&#x20B9;{items.price}</span> | <span className="in-stock">In stock</span> </p>
              <button onClick={() => cartHandler(items)} className="btn btn-primary" >Add to Cart</button>
          </div>
        </div>
      })

  return <>
  <section className="section-g">
        <div className="container py-5">
          <div className="row d-inline-flex justify-content-center">
            {
                card
            }
            
          </div>
        </div>
      </section>
</>
}
