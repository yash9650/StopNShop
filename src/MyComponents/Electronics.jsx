import React from 'react';
import pharmacyBanner from '../images/pharmacyBanner.jpg';
import DisplayCard from '../HelperComponent/DisplayCard';

export default function Electronics(props) {

    return <>
        <div className="header" style={{
            backgroundImage: `url(${'https://thumbs.dreamstime.com/z/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164230611.jpg'})`,
            backgroundPosition: 'center'
        }} />
        <DisplayCard currentUser={props.currentUser} itemData={props.itemData} type1='electronics' type2='' />
    </>
}
