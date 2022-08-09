import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import ordersBanner from '../images/orders-banner.jpg';
import useData from '../hooks/use-data';
import { decodeToken } from 'react-jwt';
import emptyCart from '../images/emptyCart.png';

function Orders() {
    let [sendReq, setSendReq] = useState(false);
    let currentUser = {}
    if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        currentUser = decodeToken(token);
    }
    const orderData = useData(`/order/${currentUser.id}`, sendReq);
    const row = orderData.map(
        item => <tr key={item._id}>
        <td className='cart-prod'>
            <div className="imageContainer col-5 py-2" style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className="product col-7 py-2">{item.itemName}</div>
        </td>                                    
        <td>{item.quantity}</td>
        <td>&#x20B9;{item.price}</td>
        <td style={{color: 'green' , marginRight: '10px'}}>Order Placed</td>
        <td>
            <Button variant="danger" onClick={()=> deleteHandler(item)}>Cancel</Button>
        </td>
    </tr>
    )

    const deleteHandler = (item) => {
        fetch(`/order/${item._id}/delete`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            },
        }).then(response =>
            response.json().then(result => {
                setSendReq((prevState) => !prevState);
                window.alert(result.message)
            }
            ).catch(err => console.log(err))
        )
    }

  return (<>
        <div className="shopping-banner" style={{ backgroundImage: `url(${ordersBanner})`, backgroundPosition: 'center' }}></div>
        { orderData.length === 0 ? 
        <div style={{ backgroundColor: '#f0f0f5' }}>
        <h2 className="d-flex justify-content-center  py-5">No Orders To Display</h2>
        <img width="20%" height="20%" className='mx-auto d-flex justify-content-center pb-5' style={{align:'center'}} src={emptyCart} alt="emptyCart" />

        </div> :
        <section className="section-g">
            <div style={{ backgroundColor: '#f0f0f5' }}>
                <h2 className="d-flex justify-content-center py-5">Your Orders</h2>
                <div className="container pb-5">
                    <div className='row col-12 px-2'>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>Product Details</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    row
                                }
                            </tbody>
                        </Table>
                    </div>
                    
                </div>
            </div>
        </section>
        }
    </>
  )
}

export default Orders