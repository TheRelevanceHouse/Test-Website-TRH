import React from "react"
import './App.css'
import {Container, Row, Col} from 'react-bootstrap'
import heroimage from './images/circles.svg'
import approachimage1 from './images/GETREADYIconWhite.svg'
import approachimage2 from './images/GOLIVEIconWhite.svg'
import approachimage3 from './images/GOBIGIconWhite.svg'

function HowPage () {

    return (
        <div className='hero-section-how'>
        <Container >
            <Row style={{ marginTop:'50px', marginBottom:'50px', display:'flex'}}>
                <Col  xs={6} md={6}>
                <br/>
                <br/>
                <br/>
                   <h4 id="howpageheading" style={{color:'#00a993', fontOpticalSizing:'4em'}}>
                   HOW WE MAKE IT HAPPEN
                   </h4>
                   <hr />
                    <br />
                   <p id='howpage' style={{color:'white', lineHeight:'34px'}}>
                   THE RELEVANCE HOUSE doesn’t operate like a regular agency. Think of us as more as an outsourced marketing department. We adopt a highly structured process covering the three phases of building a brand and business: get ready, go live and go big. To accomplish this, we have three distinct in-house units covering each phase: THE DISTILLERY, THE STUDIO and THE DELIVERY.
                   </p>
                <br/>
                <br/>
                </Col>
                <Col xs={6} md={6} style={{ textAlign :'right', display:'flex', alignItems:'center', justifyContent:'flex-end'  }}>
                    <img src={heroimage} alt='Relevant' style={{width: '350px', height: '350px'}}/>
                   
                </Col>
            </Row>
            <br/>
            <br/>
            <Row >
                <Col xs={12} md={6}>
                <h4 style={{color:'#00a993'}}>
               THE DISTILLERY
               </h4>
               <br/>
               <p id="howpage">
               THE DISTILLERY, where we draw out the essence of the brand and create a strong and relevant brand proposition.
               </p>
                </Col>
            </Row> 
            <br/>
            <Row style={{textAlign:'left'}}>
            <Col id="howpagecol"  xs={12} md={4} >
               
                <img src={approachimage1} alt='Relevant' style={{width:'80px'}}/>
                <br />
                <br/>
                <h5 style={{color:'#fff'}}>
               GET READY
               </h5>
                <br />
                <p style={{color:'#fff'}}>
                We distill your case, your story and your idea to fit on a Post-it note. We make sure your story works: from your one-pager to your whitepaper.
               </p>
            </Col>
            <Col id="howpagecol"  xs={12} md={4}>
            <img src={approachimage2} alt='Relevant' style={{width:'80px'}}/>
                <br />
                <br/>
               <h5 style={{color:'#fff'}}>
               GO LIVE
               </h5>
                <br />
                <p style={{color:'#fff'}}>
                We craft messages and stories. We constantly fine-tune and adjust, making sure to strategically challenge, coach and support you.
              </p>
           </Col>
           <Col id="howpagecol"  xs={12} md={4} >
               
           <img src={approachimage3} alt='Relevant' style={{width:'80px'}}/>
                <br />
                <br/>
               <h5 style={{color:'#fff'}}>
               GO BIG
               </h5>
                <br />
                <p style={{color:'#fff'}}>
                We help you develop and grow your strategy and business, setting you on a course of sustainable growth.
              </p>
           </Col>
            
            
        </Row>
        <Row>
            <hr className="hr1" />
        </Row>
            
        <Row >
                <Col xs={12} md={6}>
                <h4 style={{color:'#00a993'}}>
                THE STUDIO
               </h4>
               <br/>
               <p id="howpage">
               THE STUDIO is where strategies are developed and your brand is shaped and brought to life.
               </p>
                </Col>
            </Row> 
            <br/>
            <Row style={{textAlign:'left'}}>
            <Col id="howpagecol"  xs={12} md={4} >
               
                <img src={approachimage1} alt='Relevant' style={{width:'80px'}}/>
                <br />
                <br/>
                <h5 style={{color:'#fff'}}>
               GET READY
               </h5>
                <br />
                <p style={{color:'#fff'}}>
                We create, design, write and build your story into a professional brand. We make sure it looks great and is consistent everywhere.
               </p>
            </Col>
            <Col id="howpagecol"  xs={12} md={4}>
            <img src={approachimage2} alt='Relevant' style={{width:'80px'}}/>
                <br />
                <br/>
               <h5 style={{color:'#fff'}}>
               GO LIVE
               </h5>
                <br />
                <p style={{color:'#fff'}}>
                We write and visualize stories, create and produce content. We make sure your message is visible and convincing.
              </p>
           </Col>
           <Col id="howpagecol"  xs={12} md={4} >
               
           <img src={approachimage3} alt='Relevant' style={{width:'80px'}}/>
                <br />
                <br/>
               <h5 style={{color:'#fff'}}>
               GO BIG
               </h5>
                <br />
                <p style={{color:'#fff'}}>
                It is time to expand your presence. We make sure your brand and story continue to grow and remain relevant.
              </p>
           </Col>
            
            
        </Row>
        <Row>
            <hr className="hr1" />
        </Row>

        <Row >
                <Col xs={12} md={6}>
                <h4 style={{color:'#00a993'}}>
                THE DELIVERY
               </h4>
               <br/>
               <p id="howpage">
               THE DELIVERY is where we craft relevant stories to promote an intriguing, inclusive and engaging dialogue.
               </p>
                </Col>
            </Row> 
            <br/>
            <Row style={{textAlign:'left'}}>
            <Col id="howpagecol"  xs={12} md={4} >
               
                <img src={approachimage1} alt='Relevant' style={{width:'80px'}}/>
                <br />
                <br/>
                <h5 style={{color:'#fff'}}>
               GET READY
               </h5>
                <br />
                <p style={{color:'#fff'}}>
                Tell people what you are planning — press, early adopters, investors and prospects. We make sure your message is relevant.
               </p>
            </Col>
            <Col id="howpagecol"  xs={12} md={4}>
            <img src={approachimage2} alt='Relevant' style={{width:'80px'}}/>
                <br />
                <br/>
               <h5 style={{color:'#fff'}}>
               GO LIVE
               </h5>
                <br />
                <p style={{color:'#fff'}}>
                The day has arrived when your project can take flight. We help you to grow and manage your community, speak to the press and connect with influencers.
              </p>
           </Col>
           <Col id="howpagecol"  xs={12} md={4} >
               
           <img src={approachimage3} alt='Relevant' style={{width:'80px'}}/>
                <br />
                <br/>
               <h5 style={{color:'#fff'}}>
               GO BIG
               </h5>
                <br />
                <p style={{color:'#fff'}}>
                It’s time to scale. We help you to communicate and connect with the people who matter so that your project can grow.
              </p>
           </Col>
            
            
        </Row>
        <Row >
          
            <button className="btn-green" style={{ marginLeft :'15px', border:'#00a993', marginBottom:'20px' }}>Want to see it in a different graphic?</button>
        
            
            <button className="btn-green" style={{ marginLeft :'15px', border:'#00a993' , marginBottom:'20px'}}>Still curious about all this stuff?</button>
             

         
        </Row>
        <Row>
            <hr className="hr1" id="hideline" />
        </Row>

        
        </Container>
        
        </div>
    )
}

export default HowPage;