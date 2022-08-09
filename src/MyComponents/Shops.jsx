import React from 'react';
import img1 from '../images/img1.jpg';
import {Link} from "react-router-dom";

export default function Shops() {
  return <>
  <div className="header" style = {{backgroundImage: `url(${img1})`}}></div>
  <section className="section-g">
        <div className="container py-5">
          {/* <h2 className="ghead d-flex justify-content-center pt-2">OFFERS OF THE DAY</h2>
          <p className="ghead pb-5 d-flex justify-content-center fst-italic">These offers are valid only till 11:59:59 today!</p> */}
          <div className="row d-inline-flex justify-content-center">
            <div className="card col-3 mx-1 my-1" style={{width: '18rem'}}>
              <span class="position-absolute end-0 top-0 translate-end badge bg-dark">Sale</span>
                <img src={img1} className="mt-3" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Lenovo HT05 TWS Earphones with Bluetooth 5.0</h5>
                    <p className="card-text"><span className="cut-price">&#x20B9;3999</span> (40% off) </p>
                    <form>
                        <p><span className="price">&#x20B9;1599</span> | <span className="in-stock">In stock</span> </p>
                        <Link to="#" className="btn btn-primary">Add to Cart</Link>
                    </form>                 
                </div>
            </div>
            <div className="card col-3 mx-1 my-1" style={{width: '18rem'}}>
                <img src={img1} className="card-img-top mt-3" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Lenovo HT05 TWS Earphones with Bluetooth 5.0</h5>
                    <p className="card-text"><span className="cut-price">&#x20B9;3999</span> (40% off) </p>
                    <form>
                        <p><span className="price">&#x20B9;1599</span> | <span className="in-stock">In stock</span> </p>
                        <Link to="#" className="btn btn-primary">Add to Cart</Link>
                    </form>                 
                </div>
            </div>
            <div className="card col-3 mx-1 my-1" style={{width: '18rem'}}>
                <img src={img1} className="card-img-top mt-3" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Lenovo HT05 TWS Earphones with Bluetooth 5.0</h5>
                    <p className="card-text"><span className="cut-price">&#x20B9;3999</span> (40% off) </p>
                    <form>
                        <p><span className="price">&#x20B9;1599</span> | <span className="in-stock">In stock</span> </p>
                        <Link to="#" className="btn btn-primary">Add to Cart</Link>
                    </form>                 
                </div>
            </div>
            <div className="card col-3 mx-1 my-1" style={{width: '18rem'}}>
                <img src={img1} className="card-img-top mt-3" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Lenovo HT05 TWS Earphones with Bluetooth 5.0</h5>
                    <p className="card-text"><span className="cut-price">&#x20B9;3999</span> (40% off) </p>
                    <form>
                        <p><span className="price">&#x20B9;1599</span> | <span className="in-stock">In stock</span> </p>
                        <Link to="#" className="btn btn-primary">Add to Cart</Link>
                    </form>                 
                </div>
            </div>
            <div className="card col-3 mx-1 my-1" style={{width: '18rem'}}>
                <img src={img1} className="card-img-top mt-3" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Lenovo HT05 TWS Earphones with Bluetooth 5.0</h5>
                    <p className="card-text"><span className="cut-price">&#x20B9;3999</span> (40% off) </p>
                    <form>
                        <p><span className="price">&#x20B9;1599</span> | <span className="in-stock">In stock</span> </p>
                        <Link to="#" className="btn btn-primary">Add to Cart</Link>
                    </form>                 
                </div>
            </div>
            <div className="card col-3 mx-1 my-1" style={{width: '18rem'}}>
                <img src={img1} className="card-img-top mt-3" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Lenovo HT05 TWS Earphones with Bluetooth 5.0</h5>
                    <p className="card-text"><span className="cut-price">&#x20B9;3999</span> (40% off) </p>
                    <form>
                        <p><span className="price">&#x20B9;1599</span> | <span className="in-stock">In stock</span> </p>
                        <Link to="#" className="btn btn-primary">Add to Cart</Link>
                    </form>                 
                </div>
            </div>
            <div className="card col-3 mx-1 my-1" style={{width: '18rem'}}>
                <img src={img1} className="card-img-top mt-3" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Lenovo HT05 TWS Earphones with Bluetooth 5.0</h5>
                    <p className="card-text"><span className="cut-price">&#x20B9;3999</span> (40% off) </p>
                    <form>
                        <p><span className="price">&#x20B9;1599</span> | <span className="in-stock">In stock</span> </p>
                        <Link to="#" className="btn btn-primary">Add to Cart</Link>
                    </form>                 
                </div>
            </div>
            
          </div>
        </div>
      </section>
</>
}
