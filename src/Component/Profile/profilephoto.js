import React from 'react';
import Photo from '../cv.png';
import './profilphoto.css';
export default function profilephoto() {
    return (
        <div>
            <img  className="photo"   src={Photo}/>  
        </div>
    )
}
