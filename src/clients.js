import React from 'react';
import './App.css';
import ajuna from './images/ajuna.png'
import algo from './images/algo.png'
import ab from './images/AllianceBlock-Logo.png'
import CD from './images/Custodigit-logo.png'
import encointer from './images/encointer.png'
import geeq from './images/Geeq-Logo.png'
import integritee from './images/integritee.png'
import mindfire from './images/mindfire.png'
import seba from './images/seba-bank.png'
import utopia from './images/utopia.png'
import madheidi from './images/madheidi.png'
import {Container} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Clients (props) {
    return (
        <div className='clients' id="clients">
            <Container >
        <Row style={{ marginTop:'50px', marginBottom:'20px', position:'relative'}}>
        <br id='hidespace' />
            <Col  xs={12} md={12}>
               
                <br/>
               <h4 id="teamheading">
               NOTABLE CLIENTS INCLUDE
               </h4>
               
                <hr id='teamline' style={{ marginLeft:'0', width:'15%' }} />
                <br />
              
            </Col>
        </Row>
   

            {/* Row-1 Clients section for mobile */}


        <Row id="clientrow-mobile">
      <Col  xs={3} >
      <a href='https://ajuna.io/'>
        <img src={ajuna} alt='AjunaNetwork'/>
        </a>
       </Col>

       <Col  xs={3} >
       <a href='https://geeq.io/'>
        <img src={geeq} alt='Geeq' />
   </a>
       </Col>

       <Col  xs={3}  >
       <a href='https://utopiamusic.com/'>
       <img src={utopia} alt='UtopiaMusic' />
       </a>
           </Col>
           <Col  xs={3} >
           <a href='https://www.seba.swiss/'>
       <img src={seba} alt='SebaBank' />
       </a>
       </Col>
           </Row>

   {/* Row-2 Clients section for mobile */}
           <Row id="clientrow-mobile">
      <Col  xs={3} >
      <a href='https://encointer.org/'>
        <img src={encointer} alt='Encointer' />
        </a>
       </Col>

       <Col  xs={3} >
       <a href='https://madheidi.com/'>
        <img src={madheidi} alt='MadHeidi' />
        </a>
       </Col>

       <Col  xs={3}  >
       <a href='https://allianceblock.io/'>
       <img src={ab} alt='AllianceBlock' />
   </a>
           </Col>
           <Col  xs={3} >
           <a href='https://integritee.network/'>
       <img src={integritee} alt='IntegriTEE' />
  </a>
       </Col>
           </Row>
        
   {/* Row-3 Clients section for mobile */}
   <Row id="clientrow-mobile">
      <Col  xs={4} >
      <a href='https://www.mindfire.global/'>
      <img src={mindfire} alt='MindFire' />
      </a>
       </Col>

       <Col  xs={4} >
       <a href='https://www.algotrader.com/'>
      <img src={algo} alt='AlgoTrader' />
      </a>
       </Col>

       <Col  xs={4}  >
       <a href='https://custodigit.com/'>
       <img src={CD} alt='CustoDigit' />
       </a>
           </Col>
          
           </Row>

        <Row id="clientrow">
       
        <Col  xs={3} md={2} >
       <a href='https://ajuna.io/'>
        <img src={ajuna} alt='AjunaNetwork'/>
        </a>
        </Col>
        <Col   xs={3} md={2} >
        <a href='https://geeq.io/'>
        <img src={geeq} alt='Geeq' />
   </a>
       </Col>

       <Col   xs={3} md={2} >
       <a href='https://utopiamusic.com/'>
       <img src={utopia} alt='UtopiaMusic' />
       </a>
       </Col>

       <Col   xs={3} md={2} >
       <a href='https://www.seba.swiss/'>
       <img src={seba} alt='SebaBank' />
       </a>
        </Col>

        <Col   xs={3} md={2} >
        <a href='https://encointer.org/'>
        <img src={encointer} alt='Encointer' />
        </a>
        </Col>

        <Col  sm={4} md={2} >
        <a href='https://madheidi.com/'>
        <img src={madheidi} alt='MadHeidi' />
        </a>
            </Col>
            </Row>

            <Row id="clientrow" >
       
       <Col  xs={3} md={2} >
       <a href='https://allianceblock.io/'>
       <img src={ab} alt='AllianceBlock' />
   </a>
       </Col>
       <Col  xs={3} md={2} >
       <a href='https://integritee.network/'>
       <img src={integritee} alt='IntegriTEE' />
  </a>
      </Col>

      <Col  xs={3} md={2} >
      <a href='https://www.mindfire.global/'>
      <img src={mindfire} alt='MindFire' />
      </a>
      </Col>

      <Col  xs={3} md={2} >
      <a href='https://www.algotrader.com/'>
      <img src={algo} alt='AlgoTrader' />
      </a>
       </Col>

       <Col  xs={3} md={2} >
       <a href='https://custodigit.com/'>
       <img src={CD} alt='CustoDigit' />
       </a>
       </Col>

      
           </Row>
        </Container>

         </div>
        ); 
    }