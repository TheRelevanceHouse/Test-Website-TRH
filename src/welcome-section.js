import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import DownloadIcon from './images/download.png'
// import { FileIcon } from 'react-file-icon'

export default function Welcome (props) {
    return (
    <div className='welcome-section' id='welcome-section'>
    <Container >
        <Row style={{ marginTop:'50px', display:'flex', alignItems: 'flex-end'}}>
            <Col  xs={12} md={12}>
               
                <br/>
                <br/>
               <h4 id='welcomeheading'>
                        WELCOME TO <br/>
                            THE RELEVANCE HOUSE
                  
               </h4>
                <hr id='line-shades'/>
                <br />
               <p >
               THE RELEVANCE HOUSE is a full-service Marketing, Branding and Communications agency for firms in the blockchain and emerging technology sector. We focus on helping technology start-ups and projects build and communicate a relevant brand and story. 
                <br/> <br/>
                Why? Because only relevance has impact.
               </p>
            </Col>
            
           
        </Row>
        <Row id='welcome-section' style={{ textAlign:'left', marginBottom:'20px', marginTop:'15px', marginLeft:'0px' }}>
        <h5 style={{color:'#00A993'}}>
        Are you in a hurry? Give us...
        </h5>
        </Row>
        <Row className='welcome-row' style={{ textAlign:'center', marginBottom:'40px', marginTop:'10px', marginLeft:'0px' }}>
            <br />
            <br />
            <Col id='column' xs={12} md={3} style={{ textAlign :'center'}}>
              
             {/* <FileIcon /> */}
               
               <a href={require("./files/ONE-MINUTE.pdf")} download="One Minute - THE RELEVANCE HOUSE">
               
               <span>
                   1
               </span>
                <p>
                   ONE MINUTE
               </p>
               <br />
             
               <img className="show" src={DownloadIcon} style={{width:'25px', height:'25px'}} alt='Relevant'/>

                </a>
              
            </Col>
            <Col  xs={0} md={1} style={{ textAlign :'center', width:'17%' }}>
                </Col>
            <Col id='column' xs={12} md={3} style={{ textAlign :'center'}}>
            <a href={require("./files/FIVE-MINUTE.pdf")} download="Five Minute - THE RELEVANCE HOUSE">
            <span>
                   5
               </span>

               <p>
                   FIVE MINUTES
               </p>
               <br />
               <img className="show" src={DownloadIcon} style={{width:'25px', height:'25px'}} alt='Relevant'/>
               </a>
            </Col>
            <Col  xs={0} md={1} style={{ textAlign :'center', width:'17%' }}>
                </Col>
            <Col id='column' xs={12} md={3} style={{ textAlign :'center' }}>
            <a href={require("./files/TEN-MINUTE.pdf")} download="Ten Minute - THE RELEVANCE HOUSE">
            <span>
                   10
               </span>
               <p>
                   TEN MINUTES
               </p>
               <br />
               <img className="show" src={DownloadIcon} style={{width:'25px', height:'25px'}} alt='Relevant'/>
               </a>
            </Col>
            <br/>
        </Row>
    </Container>
    </div>
    ); 
}