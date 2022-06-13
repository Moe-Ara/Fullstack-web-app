
import React, { useEffect, useState } from 'react'
import { setConstantValue } from 'typescript';
import { Button } from '../../Reusables/Button/Button'
import { Icon } from '../../Reusables/Icon/Icon';
import { Textfield } from '../../Reusables/Textfield/Textfield';
import './LogInForm.css'

const LogInForm = ({
    opened,
    clickOnX
}) => {
    const [creds, setCreds] = useState({
        'uname': '',
        'passwd': ''
    });
    function onChangetxt(event) {
        let value = event.target.value;
        let name = event.target.name;
        setCreds({
            ...creds,
            [name]: value
        })
    };
    const loginButton = () => {
        if (creds.passwd.length <6 || !creds.uname.includes('@')){
            //error
          }
          else{
            // alert(creds.uname)
            const forDat=new FormData();
            forDat.append('email', creds.uname);
            forDat.append('password', creds.passwd);
            
            fetch("/authentication", { method: 'POST',
            header:{
              'Content-Type':'multipart/form-data'
            },
             body:forDat,
      
             })
             .then(response =>response.json())
             .catch(error=>console.log)
             console.log(Response)
        };
    };
    return (
        <>
            <div className='LoginForm_container'>
                <form className={`LoginForm ${opened ? 'active' : ''}`}>
                <i class='fa fa-times' onClick={clickOnX}/>
                    <h1>Welcome Back</h1>
                    <Textfield className='txtfld' type='text' TextFiledStyle='txtfld--outline' TextFieldSize='txtfld--large' placeHolderText='E-mail/Username' onChangetxt={onChangetxt} name='uname' value={creds.uname} />
                    <Textfield className='txtfld' type='password' TextFiledStyle='txtfld--outline' TextFieldSize='txtfld--large' placeHolderText='Password' onChangetxt={onChangetxt} name='passwd' value={creds.passwd} />
                    <Button className='btn'  onClick={loginButton} buttonSize='btn--large' buttonStyle='btn--outline' >Log In</Button>
                </form>
            </div>
        </>
    );


}
export default LogInForm