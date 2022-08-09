import React from 'react'
import { Form, Button, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import useAuth from '../hooks/use-auth';
import Home from './Home';


export default function Address(props) {

    const location = useLocation();
    const { isLoggedIn, manageChange, manageSubmit,isLoading} = useAuth(
        { address: '', pincode: '',city: '',state: '', phone: null, id: props.currentUser.id},
        '/address', 'PATCH',location.state);

    return ( location.state === null ? <Home/> :
        <div className='pt-5' style={{ backgroundColor: '#f0f0f5', width: '100%', height: '100vh' }}>
            <div className='mx-auto my-auto address-form justify-content-center'>
                <Form className='p-4' onSubmit={manageSubmit}>
                    <h1 className='py-4'>Enter your details:</h1>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name='address' onChange={manageChange} placeholder="Enter your address" required />
                    </Form.Group>
                    <div className="row">
                        <Form.Group className="col-4 mb-3" controlId="formBasicCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" name='city' onChange={manageChange} placeholder="city" required />
                        </Form.Group>
                        <Form.Group className="col-4 mb-3" controlId="formBasicCity">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" name='state' onChange={manageChange} placeholder="state" required />
                        </Form.Group>
                        <Form.Group className="col-4 mb-3" controlId="formBasicPinCode">
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control type="text" name='pincode' onChange={manageChange} placeholder="pin code" required />
                        </Form.Group>
                    </div>

                    <Form.Group className="mb-3 col-6" controlId="formBasicNumber">
                        <Form.Label>Phone Number</Form.Label><br />
                        <Form.Control type="tel" name='phone' onChange={manageChange} pattern="[0-9]{10}" placeholder="phone number" required />
                    </Form.Group>

                    <Button variant="warning" type="submit">
                        {isLoading? 'Processing...' : 'Save & Place Order'}
                    </Button>
                </Form>
            </div>
            {/* </div> */}
        </div>
    )
}
