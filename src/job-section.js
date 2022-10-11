import React from 'react';
import './App.css';
import {Row, Col, Container} from 'react-bootstrap'
import arrow from "./images/arrow.svg"

export default function JobSection (props) {
    return (
    <div className='job-section'>
         <Container >
        <Row style={{ marginTop:'50px', marginBottom:'60px', position:'relative', display:'flex', flexWrap:'wrap'}}>
            <Col  xs={6} md={6} style={{borderRight:'2px solid #00a993'}}>
               
                <br/>
               <h4 id='hiringheading'>
               WE ARE HIRING!
               </h4>
               
                <hr style={{ marginLeft:'0' }} />
                <br />
               <p >
               From internships to roles for senior professionals, we offer many opportunities for you to grow with us and shape the future.
               </p>
               <p >
               Want to join us? Please see the vacant job offers below and send your CV and cover letter to <a href="mailto: welcome@therelevancehouse.com" style={{color: '#00A993'}}>welcome@therelevancehouse.com</a>. We look forward to meeting you!
            </p>
            </Col>

            <Col id="jobscol"  xs={6} md={6} style={{display:'flex', aligncontent:'center', alignitems:'center', justifycontent:'center'}}>

        
        <table style={{layout:'fixed', width:'100%', margin:'0px 0px 0px 20px'}}>
           
            <tr>
                <td>
                <a href={require("./files/Job-Description--Creative-Copywriter.pdf")} rel="noopener noreferrer" target="_blank">
                    CREATIVE COPYWRITER (60%)</a>
                <img src={arrow}  alt='arrow'/>
                </td>
            </tr>
            <tr>
                <td>
                <a href={require("./files/Job-Description--Content-Writer.pdf")} rel="noopener noreferrer" target="_blank">
                    CONTENT WRITER (60%)</a>
                <img src={arrow}  alt='arrow'/>
                </td>
            </tr>
            <tr>
                <td>
                <a href={require("./files/Job-Discription--Social-Media-Manager.pdf")} rel="noopener noreferrer" target="_blank">
                    SOCIAL MEDIA MANAGER (50-80%)</a>
                <img src={arrow}  alt='arrow'/>
                </td>
            </tr>
            <tr>
                <td>
                <a href={require("./files/Job-Discription--PR-Communication.pdf")} rel="noopener noreferrer" target="_blank">
                    INTERNSHIP PR &amp; COMMUNICATION (50-80%) &nbsp; &nbsp; &nbsp;</a>
                <img src={arrow}  alt='arrow'/>
                </td>
            </tr>
            <tr>
                <td>
                <a href={require("./files/Job-Discription--Digital-Marketing.pdf")} rel="noopener noreferrer" target="_blank">
                    INTERNSHIP DIGITAL MARKETING (50-80%)</a>
                <img src={arrow}  alt='arrow'/>
                </td>
            </tr>
        </table>

            </Col>
        </Row>
    </Container>
    </div>
    ); 
}