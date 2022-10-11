import React from 'react';
import './App.css';
import map from './images/map.png'


export default function Map (props) {
    return (
        <div className='map' id="map">
         
         <img src={map} alt='Relevant' style={{width: '100%', height: 'auto'}}/>
         
         </div>
        ); 
    }