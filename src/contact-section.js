import React from 'react';
import './App.css';
import {Row, Col, Container} from 'react-bootstrap'
import ln from './images/LinkedIN_white.svg'
import medium from './images/Medium_white.svg'
import twitter from './images/Twitter_white.svg'
import fb from './images/Facebook_white.svg'
import instagram from './images/Instagram_white.svg'
import locationimage from './images/AddressIcon.svg'
import contactimage from './images/ContactIcon.svg'
import linkedinhover from './images/LinkedinIconHover.svg'
import facebookhover from './images/FacebookIconHover.svg'
import twitterhover from './images/TwitterIconHover.svg'
import instagramhover from './images/InstagramIconHover.svg'
import mediumhover from './images/MediumIconHover.svg'

export default function ContactSection (props) {
    return (
    <div className='contact-section' id='contact-section'>
         <Container >
        <Row style={{ marginTop:'50px', marginBottom:'20px', position:'relative', display:'flex'}}>
        <br id='hidespace' />
            <Col  xs={6} md={6}>
                <br/>
               <h4 id='contactheading'>
               LET US GET IN TOUCH!
               </h4>
               
                <hr style={{ marginLeft:'0' }} />
                <br />
               <p style={{color:'#c6c6c6', lineHeight:'2em'}}>
               In order for firms in the blockchain and emerging technology sector to be successful, they need to build a relevant brand and story. We are here to help! So what are you waiting for?
               </p>
            </Col>
            <Col id="footer-social"  xs={6} md={6}>

            <div id='footer-social'>
                <a href='https://www.linkedin.com/company/therelevancehouse/'> 
               
                <img className='social-nav' src={ln} alt='linkedin' onMouseOver={e => e.currentTarget.src = linkedinhover}  onMouseOut={e => e.currentTarget.src = ln} />
                </a>
                <a href='https://medium.com/the-relevance-house'> 
                
                <img className='social-nav' src={medium} alt='medium' onMouseOver={e => e.currentTarget.src = mediumhover}  onMouseOut={e => e.currentTarget.src = medium} />
                </a>
                <a href='https://twitter.com/RelevanceHouse'> 
                
                <img className='social-nav' src={twitter} alt='twitter' onMouseOver={e => e.currentTarget.src = twitterhover}  onMouseOut={e => e.currentTarget.src = twitter} />
                </a>
                <a href='https://www.facebook.com/TheRelevanceHouse/'> 
               
                <img className='social-nav' src={fb} alt='facebook' onMouseOver={e => e.currentTarget.src = facebookhover}  onMouseOut={e => e.currentTarget.src = fb} />
                </a>
                <a href='https://www.instagram.com/therelevancehouse/'> 
               
                <img className='social-nav' src={instagram} alt='instagram' onMouseOver={e => e.currentTarget.src = instagramhover}  onMouseOut={e => e.currentTarget.src = instagram} />
                </a>      
            </div>
            </Col>
        </Row>
        <Row style={{ marginTop:'35px', marginBottom:'20px', position:'relative'}}>
            <Col  xs={6} md={6}>
               
                <br/>
                <img id="" src={locationimage} alt='Relevant'/>
                <br/>
                <h5 id='contact-section-text' style={{color:'rgb(0, 169, 147)'}}>
               Head Office:
               </h5>
                <p style={{color:'#fff', lineHeight:'34px'}}>
                THE RELEVANCE HOUSE. AG <br />
                Dammstrasse 16 | CH 6300 Zug
               </p>
                <br />
                <h5 id='contact-section-text' style={{color:'rgb(0, 169, 147)'}}>
               Zurich Office:
               </h5>
                <p style={{color:'#fff', lineHeight:'34px'}}>
                Mostly remote these days ;)
               </p>
            </Col>

            <Col  xs={6} md={6} style={{textAlign:'left', bottom:'0',right:'0'}}>
        
            <br/>
                <img id="" src={contactimage} alt='Relevant'/>
                <br/>
                <h5 id='contact-section-text' style={{color:'rgb(0, 169, 147)'}}>
               Contact:
               </h5>
                <p style={{color:'#fff', lineHeight:'34px'}}>
                Send us your questions and we will reply as soon as possible.
               </p>
                
                <h5 id='contact-section-text' style={{color:'rgb(0, 169, 147)'}}>
                PRESS & OTHER INQUIRIES:
               </h5>
               <a href="mailto:welcome@therelevancehouse.com?subject=Mail from Our Site - Press and Other Inquiries" style={{color:'#fff', lineHeight:'34px'}}>
                <p style={{color:'#fff !important', lineHeight:'34px'}}>
               welcome@therelevancehouse.com
               </p>
               </a>
                <h5 id='contact-section-text' style={{color:'rgb(0, 169, 147)'}}>
                NEW CUSTOMERS:
               </h5>
               <a href="mailto:lovetobe@therelevancehouse.com?subject=Mail from Our Site - New Customer" style={{color:'#fff', lineHeight:'34px'}}>
                <p style={{color:'#fff', lineHeight:'34px'}}>
                lovetobe@therelevancehouse.com
               </p>
                </a>
            </Col>
        </Row>
    </Container>
    </div>
    ); 
}