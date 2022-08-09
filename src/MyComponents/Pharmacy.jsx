import React from 'react';
import pharmacyBanner from '../images/pharmacyBanner.jpg';
import DisplayCard from '../HelperComponent/DisplayCard';

export default function Pharmacy(props) {

  return <>
  <div className="header" style = {{backgroundImage: `url(${pharmacyBanner})`, backgroundPosition:'center'}}/>
  <DisplayCard currentUser={props.currentUser} itemData={props.itemData} type1='medicine' type2 = ''/>
  </>
}
