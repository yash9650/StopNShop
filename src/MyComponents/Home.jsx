import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom";
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import read from '../images/read.jpg';
import AuthContext from '../context/auth-context';


export default function Home(props) {
    const {isLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const anyData = [];
    const newlyAddedData = [];
  
    props.itemData.map(element => {
      if (element.type === 'any') {
        anyData.push(element);
      }
    })

    props.itemData.map((element,i )=> {
      if(i >= props.itemData.length - 2){
        newlyAddedData.push(element);
      }
    })
  
    const clickHandler = (items) => {
      navigate('/details', {
        state: {
          id: items._id,
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
        const userId = props.currentUser.id;
        const {_id ,itemName, description,price,image,type,quantity,weight} = items;
        const item = {
          itemName,
          description,
          price,
          image,
          type,
          quantity: 1,
          weight,
          userId,
          objectId: _id

        }
        fetch('/cart' , {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(item)
      }).then(response => response.json().then(
        result => window.alert(result.message)
      )).catch(err => window.alert(err.message))
      }


    const card = anyData.map(items => {
        return <div key={items._id} className="card col-3 mx-1 my-1" style={{ width: '15rem', height: '400px' }}>
          <span className="position-absolute end-0 top-0 translate-end badge bg-dark">Sale</span>
          <img onClick={() => clickHandler(items)} src={`${items.image}`} className="mt-3" alt="Loading..." height='200px' />
          <div className="card-body" >
            <h5 onClick={() => clickHandler(items)} style={{height: '45px'}} className="card-title">
              {items.itemName.substring(0, Math.min(items.itemName.length, 20))}{items.itemName.length > 20 &&'...'}</h5>
            <p><span className="price">&#x20B9;{items.price}</span> | <span className="in-stock">In stock</span> </p>
            <button onClick={() => cartHandler(items)} className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      })

    const newlyAddedItemCard = newlyAddedData.map(items =>{
          return <div key={items._id} className="product-one col-6" style={{height: '500px'}}>
            <div className="col-6 mx-2 newproduct-one-image">
                <img onClick={() => clickHandler(items)} src={`${items.image}`}/>
            </div>
            <div className="col-6 mx-2 newproduct-one-desc">
                <h2 style={{height: '130px'}}>{items.itemName.substring(0, Math.min(items.itemName.length, 40))}{items.itemName.length > 40 &&'...'}</h2>
                <p style={{height: '150px'}}>{items.description.substring(0, Math.min(items.description.length, 200))}{items.description.length > 200 &&'...'}</p>
                <p style={{marginTop: '30px'}}><span className="price">&#x20B9;{items.price}</span> | <span className="in-stock">In stock</span> </p>
                <button onClick={() => cartHandler(items)} className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    })

    
  return (
    <>
    <Carousel>
        <Carousel.Item className = "citem col-12" style = {{backgroundImage: `url(${img3})`}}>
            
            <div className="first-carousel container">       
                <div className="image-container-one col-sm-3" style = {{ backgroundImage: `url(${img2})` }}>
                </div>
                <div className="col-sm-5 content">
                    <h1 className="carousel-heading-one">Get fresh groceries at your doorstep</h1>
                    <Link to ="/groceries" className="btn btn-lg btn-warning carousel-button btn-hover"> Order Now</Link>
                </div>
            </div>
            
        </Carousel.Item>
        <Carousel.Item className = "citem col-12" style = {{backgroundImage: `url(${img4})`}}>
            
            <div className="first-carousel container">
                <div className="col-sm-5 content">
                    <h1 className="carousel-heading-two">Buy second-hand books at 40% off!</h1>
                    <Link to="/books" className="btn btn-lg btn-warning carousel-button btn-hover">Order Now</Link>
                </div>
                <div className="image-container-two col-sm-3" style = {{ backgroundImage: `url(${read})` }}>
                </div>
            </div>
            
        </Carousel.Item>
        <Carousel.Item className = "citem col-12" style = {{backgroundImage: `url(${img6})`}}>
            
            <div className="first-carousel container">
                <div className="image-container-three col-sm-3" style = {{ backgroundImage: `url(${img7})` }}>
                </div>
                <div className="col-sm-5 content">
                    <h1 className="carousel-heading-three">Buy Medicines with just a click.</h1>
                    <Link to="/pharmacy" className="btn btn-lg btn-warning carousel-button btn-hover">Order Now</Link>
                </div>
            </div>
            
        </Carousel.Item>
    </Carousel>
       

    <section className="section py-5">
      <div className="container col-12 px-3" style={{height:'fit-content', display: 'flex'}}>
        <div className="mx-auto">
          <h2 className="section-one pt-2">OFFERS OF THE DAY</h2>
          <p className="section-one-desc">These offers are valid only till 11:59:59 today!</p>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row justify-content-center">
          {
            card
          }
        </div>
      </div>
    </section>
    

    <div className="new-offers mx-auto py-5">
        <h2 className="section-two">NEWLY ADDED PRODUCTS</h2>
        <p className="section-two-desc">Compare the products and grab the best deal!</p>
        <div className="container">
            <div className="row col-12 products justify-content-center">
              {
                newlyAddedItemCard
              }
            </div>
        </div>
    </div>
    </>
  );
}