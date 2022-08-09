import React, { useContext } from 'react';
import shoppingCart from '../images/shopping-cart.jpg';
import emptyCart from '../images/emptyCart.png';
import { Table, Button } from 'react-bootstrap';
import useData from '../hooks/use-data';
import { decodeToken } from 'react-jwt';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth-context';

export default function Cart() {
    const {isLoggedIn} = useContext(AuthContext);
    let total = 0;
    let [sendReq, setSendReq] = useState(false);
    let currentUser = {}
    if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        currentUser = decodeToken(token);
    }
    const cartData = useData(`/cart/${currentUser.id}`, sendReq);
    const navigate = useNavigate();



    const deleteHandler = (item) => {
        fetch(`/cart/${item._id}/delete`, {
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

    const placeOrderHandler = () => {
        navigate('/address',{state: cartData});
    }

    const setTotal = (item) => {
        total += (item.price * item.quantity)
    }

    const row = cartData.map(
        item => <tr key={item._id}>
            {setTotal(item)}
            <td className='cart-prod'>
                <div className="imageContainer col-5 py-2" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="product col-7 py-2">{item.itemName}</div>
            </td>
            <td>
                <form>
                    <input type="number" min={1} max={15} value={item.quantity} readOnly />
                </form>
            </td>
            <td>&#x20B9;{item.price}</td>
            <td>&#x20B9;{item.price * item.quantity}</td>
            <td><Button variant='danger' onClick={() => deleteHandler(item)} className='btn-sm'>Delete</Button></td>
        </tr>
    )

    const displayCart = <section className="section-g">
        <div style={{ backgroundColor: '#f0f0f5' }}>
            <h2 className="d-flex justify-content-center py-5">Items you have added</h2>
            <div className="container pb-5">
                <div className='row col-12 px-2'>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>Product Details</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                row
                            }
                        </tbody>
                    </Table>
                </div>
                <div className="justify-content-end">
                    <div className="grandTotal d-flex px-3 py-2">
                        <h5 className='col-9'>Grand Total:</h5>
                        <h5 className='col-3'>&#x20B9;{total}</h5>
                    </div>
                    <Button size='sm' variant='warning' onClick={placeOrderHandler} >Place Order</Button>
                </div>
            </div>
        </div>
    </section>

    return <>
            <div className="shopping-banner" style={{ backgroundImage: `url(${shoppingCart})` }}></div>
            {cartData.length === 0 ? <div style={{ backgroundColor: '#f0f0f5' }}>
                <h2 className="d-flex justify-content-center py-5">Your Cart is Empty</h2>
                <img width="20%" height="20%" className='mx-auto d-flex justify-content-center pb-5' style={{align:'center'}} src={emptyCart} alt="emptyCart" />
            </div> : displayCart}
        </>
}