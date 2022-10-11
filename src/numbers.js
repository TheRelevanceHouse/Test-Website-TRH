import React from 'react';
import './App.css';
import {Container} from 'react-bootstrap'
import numbers from './images/numbers.png'


export default function Numbers (props) {
    return (
        <div className='numbers' id="numbers" style={{background:'#13161B'}}>
         <Container style={{  position:'relative'}}>
         {
            <img src={numbers} alt='Relevant' style={{marginTop:'50px', marginBottom:'60px', width: '100%', height: 'auto'}}/> 
         }
        
         
         </Container>
         </div>
        


        ); 
    }