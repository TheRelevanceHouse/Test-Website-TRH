import React, { useState } from 'react';
import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 1000px) {
    z-index: 1;
    flex-flow: column nowrap;
    background-color: #13161B;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

    top: 12%;
    right: 0;
    width: 100%;
    height:auto;
    padding: 1.5rem;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    font-size: 16px;
    font-family: 'Quicksand', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 7rem;

    
  }

`;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  align-items:center;
  right: 20px;
  z-index: 20;
  display: none;
  top: 6%;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    align-items:flex-start;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#00a993' : '#00a993'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)' };
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
       
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      width: ${({ open }) => open ? '20px':'16px'};
       
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)} id="burger" className='burger'>
        <div />
        <div />
        <div  />
      </StyledBurger>
     
      <Ul open={open} onClick={()=> setOpen(false)} className="mobile-menu" id="mobile-menu">
     
     <NavHashLink smooth to="/#welcome-section"  style={{ color: '#00a993' }}>
      What 
       </NavHashLink>

       <NavHashLink smooth to="/#how-section"  style={{ color: '#00a993' }}>
           How
       </NavHashLink>

       <NavHashLink smooth to="/#IsItAThing-section" style={{ color: '#00a993' }}>
           Why
       </NavHashLink>
       
       <NavHashLink smooth to="/#team-section"  style={{ color: '#00a993' }}>
           Who
       </NavHashLink>

       <NavHashLink smooth to="/#contact-section"  style={{ color: '#00a993' }}>
           Where
       </NavHashLink>
    
       <a href='https://stories.therelevancehouse.com/' style={{ color: '#00a993' }}> 
           Stories 
       </a>
   </Ul>
    </>
  )
}

export default Burger
