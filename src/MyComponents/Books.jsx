import React, { useContext } from 'react';
import booksBanner from '../images/booksBanner.jpg';
import {Link, useNavigate} from "react-router-dom";
import AuthContext from '../context/auth-context';
import DisplayCard from '../HelperComponent/DisplayCard';


export default function Books(props) {
  return <>
  <div className="header" style = {{backgroundImage: `url(${booksBanner})`, backgroundPosition:'center'}}></div>
  <DisplayCard currentUser={props.currentUser} itemData={props.itemData} type1 = 'stationery' type2='books'/>
  </>
}
