import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import backgroundwhatsection from './images/Group51.svg' 

export default function What (props) {
    return (
    <div className='what-section' id='what-section' style={{backgroundImage: `url(${backgroundwhatsection})`, backgroundSize: '50%', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
        <Container >
        <Row style={{ marginTop:'50px', marginBottom:'20px'}}> 
            <Col  xs={6} md={6}>
               
                <br/>
               <h4 id='whatheading'>
               WHAT MAKES US UNIQUE
               </h4>
               
                <hr style={{ marginLeft:'0' }} />
                <br />
               <p>
               For humans to buy into something, it needs to be relevant to them. They need to see it, they need to want it and they need to trust it. Then, and only then, we will we be able to change the world. And we, like you, want to change it for the better.
               </p>
               <br/>
            </Col>
            <Col  xs={6} md={6} style={{textAlign:'center'}}>
            
            </Col>
        </Row>
        <Row>
        <Col  xs={6} md={6} style={{textAlign:'center'}} id="mobile-hide">
            <div className='line'>
                
                </div>
            </Col>
            <Col  xs={6} md={6} style={{textAlign:'center'}}>
            <h6>
            FOCUS: EMERGING TECHNOLOGY FIRMS
            </h6>
            <br/>
            <p>
            We are laser focused on helping emerging technology firms to build their brands, reach their revenue and funding targets and continue to grow. That is all we do. Day in, day out.
            </p>
            <br/>
            </Col>
        </Row>
        <Row>
        <Col  xs={6} md={6} style={{textAlign:'center'}} id="mobile-hide">
            <div className='line'>
                
                </div>
            </Col>
            <Col  xs={6} md={6} style={{textAlign:'center'}}>
            <h6>
            OUR COMMITMENT: WE INVEST IN YOU
            </h6>
            <br/>
            <p>
            We want you and your project to succeed. We have skin in the game. Our fee structure means if you don't succeed, we don’t make money.
            </p>
            <br/>
            </Col>
        </Row>
        <Row>
        <Col  xs={6} md={6} style={{textAlign:'center'}} id="mobile-hide">
            <div className='line'>
                
                </div>
            </Col>
            <Col  xs={6} md={6} style={{textAlign:'center'}}>
            <h6>
            METHOD: PROVEN & PROPRIETARY
            </h6>
            <br/>
            <p>
            Even the best chefs in the world work with recipes. They develop it after years of trying and learning, with a great deal of natural talent thrown in.
            </p>
            <br/>
            </Col>
        </Row>

        
    </Container>
    </div>
    ); 
}