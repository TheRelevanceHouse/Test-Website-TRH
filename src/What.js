import React from "react"
import './App.css'
import {Container, Row, Col} from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import circle1 from './images/circle1.svg'
import circle2 from './images/circle2.svg'
import circle3 from './images/circle3.svg'

function WhatPage () {

    return (
        <div className='hero-section-how'>
        <Container >
            <Row style={{ marginTop:'50px', marginBottom:'30px', display:'flex'}}>
                <Col  xs={6} md={6}>
                <br/>
                <br/>
                <br/>
                   <h4 id="howpageheading" style={{color:'#00a993', fontOpticalSizing:'4em'}}>
                   WHAT WE DO
                   </h4>
                   <hr />
                    <br />
                   <p id='howpage' style={{color:'white', lineHeight:'34px'}}>
                   We create & deliver visible, valuable & credible stories that measurably create impact.
                   </p>
                <br/>
                <br/>
                </Col>
                <Col xs={6} md={6} style={{ textAlign :'right', display:'flex', alignItems:'center', justifyContent:'flex-end'  }}>
                   
                   
                </Col>
            </Row>
            <br id="hideitline"/>
            <br id="hideitline"/>
            <Row style={{disply:'flex'}}>
                <Col xs={12} md={6}>
                <h4 style={{color:'#00a993'}}>
                VISIBILITY
               </h4>
               <br/>
               <p id="howpage">
               YOUR AUDIENCE NEEDS TO BE FAMILIAR WITH YOU BEFORE EVEN CONSIDERING YOUR OFFER.
               </p>
               <br/>
               <p id="howpage" style={{ fontweight:'400' }}>
               At THE RELEVANCE HOUSE, we help you build that visibility. We define the touchpoints and channels investors and other target groups are paying attention to. We speak their language and identify what stories and messages they are looking for. To achieve this, we work with you to define target groups and analyse what channels are relevant to them. Then, we help you build your presence across those channels to deliver your message effectively and efficiently.

               We make you stand out, look good and sound great.
               <br/>
               </p>
                </Col>
                <Col xs={12} md={6} style={{ textAlign :'right', display:'flex', alignItems:'center', justifyContent:'flex-end'  }}>
                    <img src={circle1} alt='Relevant' style={{width: '350px', height: '350px'}}/>
                   
                </Col>
            </Row> 
            
            <br/>
        <Row>
            <hr className="hr2" />
        </Row>
        <Row style={{disply:'flex'}}>
                <Col xs={12} md={6}>
                <h4 style={{color:'#00a993'}}>
                VALUE
               </h4>
               <br/>
               <p id="howpage">
               WE ARE ALL BOMBARDED WITH ADVERTISING EVERY DAY. SO HOW CAN YOU STAND OUT FROM THE CROWD?
               </p>
               <br/>
               <p id="howpage" style={{ fontweight:'400' }}>
               We are exposed to between 4,000 and 10,000 brand messages per day. That is nearly seven messages per minute. Understandably, people now screen or simply ignore the vast majority of them. If your messages are not relevant, you will be ignored.
What is in it for me? When it comes to attracting investment and customers, that’s the question you need to answer. We distill the essence of your message and make sure you have the right words and the right tone in the right place.

Six words: What's in it for me?
               </p>
               <br/>
                </Col>
                <Col xs={12} md={6} style={{ textAlign :'right', display:'flex', alignItems:'center', justifyContent:'flex-end'  }}>
                    <img src={circle2} alt='Relevant' style={{width: '350px', height: '350px'}}/>
                   
                </Col>
            </Row> 
            
            <br/>
        <Row>
            <hr className="hr2" />
        </Row>
        <Row style={{disply:'flex'}}>
                <Col xs={12} md={6}>
                <h4 style={{color:'#00a993'}}>
                CREDIBILITY
               </h4>
               <br/>
               <p id="howpage">
               EVER RECEIVED AN EMAIL FROM AN AFRICAN PRINCE OFFERING EASY MONEY? WE ALL HAVE, AND WE ALL IGNORE OR DELETE.
               </p>
               <p id="howpage" style={{ fontweight:'400' }}>
               It is not that we are not interested. We certainly are. The value is obvious. But we back away because we don’t trust it. And it is all about trust. Trust is something that needs to be earned. It takes time and effort. We will help you build trust in your business by positioning you and your team as recognized experts and thought leaders. When people check you out online, they will be reassured to see that others are talking about you and that you have a credible web presence.

We will build and manage a community that trusts you.
               </p>
               <br/>
                </Col>
                <Col xs={12} md={6} style={{ textAlign :'right', display:'flex', alignItems:'center', justifyContent:'flex-end'  }}>
                    <img src={circle3} alt='Relevant' style={{width: '350px', height: '350px'}}/>
                   
                </Col>
            </Row> 
            
            <br/>
      
       
        <Row style={{marginTop:'50px', marginBottom:'50px'}} >
          
            <button className="btn-green" style={{ marginLeft :'15px', border:'#00a993', marginBottom:'20px' }}>Want to see it in a different graphic?</button>
            
            <button className="btn-green" style={{ marginLeft :'15px', border:'#00a993', marginBottom:'20px' }}>Still curious about all this stuff?</button>
             

         
        </Row>
        <Row>
            <hr className="hr2" />
        </Row>

        
        </Container>
        
        </div>
    )
}

export default WhatPage;