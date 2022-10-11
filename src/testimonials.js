import React from 'react';
import './App.css';
import {Container} from 'react-bootstrap'
import Testimopnialtest from './images/testimonial.png'


export default function Testimonials (props) {
    return (
        <div className='Testimonials' id="Testimonials">
         <Container >
         <img src={Testimopnialtest} alt='Relevant' style={{width: '100%', height: 'auto'}}/>
         </Container>
         </div>
        ); 
    }