import React from 'react';
import DisplayCard from '../HelperComponent/DisplayCard';
import img1 from '../images/img1.jpg';

export default function Groceries(props) {

  return <>
    <div className="header" style={{ backgroundImage: `url(${img1})` }}></div>
  <DisplayCard currentUser={props.currentUser} itemData={props.itemData} type1='groceries' type2 = ''/>
  </>
  
}
