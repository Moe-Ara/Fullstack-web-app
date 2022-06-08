import React, { useState } from 'react'
import { Button } from '../../Reusables/Button/Button'
import { Icon } from '../../Reusables/Icon/Icon';
import { Textfield } from '../../Reusables/Textfield/Textfield';
import './SignUpForm.css'


const SignUpForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  }
  const [creds, setCreds] = useState({
    uname: '',
    email: '',
    pass: '',
    conpass: ''
  });
  function onChangetxt(event) {
    let value = event.target.value;
    let name = event.target.name;
    setCreds({
      ...creds,
      [name]: value
    })
  }
  const registerButton = () => {
    if (creds.pass!=creds.conpass || creds.pass.length <6){
      //error
    }
    else{
      // alert(creds.uname)
      const forDat=new FormData();
      forDat.append('username',creds.uname);
      forDat.append('email', creds.email);
      forDat.append('password', creds.pass);
      forDat.append('passwordConfirmation', creds.conpass);
      
      fetch("/register", { method: 'POST',
      header:{
        'Content-Type':'multipart/form-data'
      },
       body:forDat,

       })
       .then(response =>response.json())
       .catch(error=>console.log)

  };
};
  const googleIconClick = () => {

  }
  const facebookIconClick = () => {

  }
  const instagramIconClick = () => {
    alert('instagreamasiodfnoasjbfo');
  }
  return (
    <>
      <div className='signUp-container'>
        <video src='/videos/hero.mp4' autoplay='true' loop='true' muted='true' />
        <form className='signUp-from'>
          <Textfield type='text' TextFiledStyle='txtfld--outline' TextFieldSize='txtfld--large' placeHolderText='Username' onChangetxt={onChangetxt} name='uname' value={creds.uname} />
          <Textfield type='email' TextFiledStyle='txtfld--outline' TextFieldSize='txtfld--large' placeHolderText='E-mail' onChangetxt={onChangetxt} name='email' value={creds.email} />
          <Textfield type='password' TextFiledStyle='txtfld--outline' TextFieldSize='txtfld--large' placeHolderText='Passsword' onChangetxt={onChangetxt} name='pass' value={creds.pass} />
          <Textfield type='password' TextFiledStyle='txtfld--outline' TextFieldSize='txtfld--large' placeHolderText='Confirm Passsword' onChangetxt={onChangetxt} name='conpass' value={creds.conpass} />
          <div className='checkbox-container'>
            <input type='checkbox' onChange={checkHandler} checked={isChecked} id='checkbox' /> <label>I agree to terms</label>
          </div>
          <Button className='btn' buttonSize='btn--large' buttonStyle='btn--outline' onClick={registerButton}>Register</Button>
          <div className='devider'><p>Or</p></div>

          <div className='SignUp-With-icons'>
            <Icon className='icons' src='/Images/googleLogo.png' onclick={googleIconClick} size='icon--small' />
            <Icon className='icons' src='/Images/facebookLogo.png' onclick={facebookIconClick} size='icon--small' />
            <Icon className='icons' src='/Images/instagramLogo.png' onclick={instagramIconClick} size='icon--small' />
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUpForm