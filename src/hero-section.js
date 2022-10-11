import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import scroll from "./images/scrolldown.svg"
import { NavHashLink } from 'react-router-hash-link'
import { HashLink } from 'react-router-hash-link'
import HeroBubbles from './HeroBubbles';


export default function Hero (props) {
    return (
    <div className='hero-section'>
    <Container >
 
        <Row  style={{ marginTop:'50px'}}>
         <br/>
        <br />
            <Col  xs={6} md={6}>
            <br id='hidespace' />
            <br/>
            <br/>
               <h4 id="heading-1" style={{color:'#00a993', fontOpticalSizing:'4em'}}>
                ONLY RELEVANCE 
               </h4>
               <h4 id='heading-2' style={{color:'c6c6c6 !important', marginTop:'15px'}}>
                HAS IMPACT
               </h4>
                <br/>
                
               <p id='hero-line' style={{color:'white', lineHeight:'34px', borderLeft:'3px solid #00A993', fontSize:'1.25em !important'}}>
               &nbsp;&nbsp;&nbsp;EVERY GOOD IDEA FITS ON A POST-IT. <br />
               &nbsp;&nbsp;&nbsp;IF IT DOESN´T. IT´S NOT A GOOD IDEA, YET.
               </p>
            
          
            
            <br/>
               <NavHashLink smooth to="/#welcome-section" className='btn-green'>
               Are you ready to be relevant ?
               </NavHashLink>
             
            </Col>
            <Col xs={6} md={6} style={{ textAlign :'right', marginTop:'-50px' }}>
            <br />
            <br id='hidespace' />
                <HeroBubbles/>
                
            </Col> 
        </Row>
        <br/>
        <Row style={{ textAlign:'center', marginBottom:'40px' }}>
       
            <HashLink smooth to="/#welcome-section">
           
            <img id='scroll-img' src={scroll}  alt='scroll'/>
            </HashLink>
           
        </Row>
        
    </Container>
    
    </div>
    
    ); 
}