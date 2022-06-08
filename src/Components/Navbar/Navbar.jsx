import React, { useState, useEffect } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import { Button } from '../../Reusables/Button/Button';
import '../../App.css'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobilMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobilMenu}>
                        <img src={"/logo512.png"} width='60px' height='60px' />
                        {/* MOE <i className='fa fa-typo3' /> */}
                    </Link>
                    {/* Here we just want to change the bars under the icon to an X and back */}
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobilMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Services' className='nav-links' onClick={closeMobilMenu}>Services</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Products' className='nav-links' onClick={closeMobilMenu}>Products</Link>
                        </li>
                        <li>
                        <Link to='/signUp' className='nav-links-mobile' onClick={closeMobilMenu}>
                        Sign Up
                        </Link>
                        </li>
                    </ul>
                    <Link to="/signUp">
                    {button && <Button buttonStyle='btn--outline' >SIGN UP</Button>}
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar

