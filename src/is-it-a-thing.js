import React from 'react';
import './App.css';
import {Row, Col, Container} from 'react-bootstrap'
import Relevancecircle from './images/3circles.png'
import { HashLink } from 'react-router-hash-link'

export default function IsItAThing (props) {
    return (
    <div className='IsItAThing-section' id="IsItAThing-section">
         <Container >
        <Row style={{ marginTop:'50px', marginBottom:'60px', position:'relative'}}>
        <br id='hidespace' />
            <Col  xs={6} md={6} style={{width:'45%'}}>
               
                <br/>
               <h4 id='isitheading'>
               IS IT A THING
               </h4>
               
                <hr style={{ marginLeft:'0' }} />
                <br />
               <p>
               Relevance is the only thing that sells. Relevance is a condition for the success of products, services, projects, funding, initiatives, messages, campaigns. You name it. What is relevant varies, depending on whom you are trying to reach with your message. But what never changes is, how relevance works.
               </p>

               <br/>

               <br/>
               <p id="isit-text">
             For something to be relevant, you need three things: visibility, value and credibility.
             </p>
            
                <br />
                <br />

              

                <HashLink to="/what/#" className='btn-green'>
                Do you want to know ?
               </HashLink>

            </Col>


            <Col id="border-remove"  xs={6} md={6} style={{textAlign:'right', position:'absolute', bottom:'0',right:'0',borderLeft:'2px solid #00a993'}}>
           
            <img src={Relevancecircle} alt='Relevant' style={{width: '500px', height: '500px'}}/>
             
           
            </Col>
        </Row>
    </Container>
    </div>
    ); 
}