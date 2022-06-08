import React, { useState, useEffect } from 'react'
import { Button } from '../../Reusables/Button/Button'
import './HeroSection.css'
import '../../App.css'
import LogInForm from '../LogInForm/LogInForm'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'


const HeroSection = () => {
  const [openLogInForm, setopenLogInForm]=useState(false);
  const loginButton=()=>{
    setopenLogInForm(true);
  }
  const closeLogInForm=()=>{
    setopenLogInForm(false);
  }
  return (
    <>
    <div className='hero-container' onClick={()=>{
      if(openLogInForm){ setopenLogInForm(false);} ;
    }} >
        <video src='/videos/hero.mp4' autoplay="true" loop="true" muted="true" /> 
        <h1>WELCOME </h1>
        <p>This is an educational site </p>
       <div className='hero-btns'>
         <Link to='/signUp'>
            <Button className='btns'  buttonSize='btn--large' buttonStyle='btn--outline'>Get Started</Button>
            </Link>
            <Button className='btns'  buttonSize='btn--large' buttonStyle='btn--primary' onClick={loginButton}>Log In <i class='fa fa-angle-up'/></Button>
        </div>  
    </div>
    <LogInForm opened={openLogInForm} clickOnX={closeLogInForm} />
    </>
  );
}

export default HeroSection