import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import map from './images/map.png'


export default function Map (props) {
    
    return (
        
        <div className='map' id="map">
         
       
         
        <section class="map">
        <br/>
        <img src={map} alt='Relevant' className='img-map' style={{width: '100%', height: '60%'}}/>
        
        
        <Link to="/" onClick="return false;" className='map-dot map-dot-red' style={{top:'22%',left:'49.5%'}}>
            <div className='text'>
                <span className='title'>Austria
                </span>
            </div>
        </Link>

        <Link to="/" onClick="return false;" class="map-dot map-dot-red" style={{top:'23%', left:'48.5%'}}>
            <div class="text">
                <span class="title">Lichtenstein</span>
            </div>
         </Link>
         <Link to="/" onClick="return false;" class="map-dot map-dot-red" style={{top:'24%',left:'46%'}}>
            <div class="text">
                <span class="title">France</span>
                </div>
        </Link>
        <Link to="/" onClick="return false;" class="map-dot map-dot-red" style={{top: '24.5%', left: '48%'}}>
            <div class="text">
                <span class="title">Switzerland</span>
                </div>
        </Link>
        <Link to="/" onClick="return false;" class="map-dot map-dot-red" style={{top: '20%', left: '45%'}}>
            <div class="text">
                <span class="title">UK</span>
                </div>
        </Link>
        <Link to="/" onClick="return false;" class="map-dot map-dot-red" style={{top: '21%', left: '46.8%'}}>
            <div class="text">
                <span class="title">Netherlands</span>
            </div>
        </Link>
        <Link to="/" onClick="return false;" class="map-dot map-dot-red" style={{top: '22.5%', left: '47.5%'}}>
            <div class="text">
                <span class="title">Germany</span>
                </div>
        </Link>
        <Link to="/" onClick="return false;" class="map-dot map-dot-red" style={{top: '18%', left: '50%'}}>
            <div class="text">
                <span class="title">Sweden</span>
                </div>
         </Link>
         <Link to="/" onClick="return false;" class="map-dot map-dot-red" style={{top: '37%', left: '18%'}}>
            <div class="text">
                <span class="title">Canada</span>
                </div>
        </Link>
        <Link to="/" onClick="return false;" class="map-dot map-dot-red" style={{top: '45%', left: '20%'}}>
            <div class="text">
                <span class="title">USA</span>
                </div>
         </Link>
        </section>

         </div>
        ); 
    }