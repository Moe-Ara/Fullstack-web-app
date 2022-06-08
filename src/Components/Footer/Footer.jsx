import React from 'react'
import { Button } from './../../Reusables/Button/Button'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <section className="footer-sub">
                <p className="footer-sub-heading">
                    Join our newsletter service to recieve our new deals
                </p>
                <p className="footer sub-text">
                    you can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                    <input type="email" name='email' placeholder='Your Email' className='footer-input'
                    /> <br/>
                    <Button buttonStyle='btn--outline' buttonSize='btn--large'> Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>About Us</h2>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Use</Link>
                        <Link to='/'>Our Team</Link>
                    </div>
                    <div className="footer-links-items">
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                    <div className="footer-links-items">
                        <h2>Useful Links</h2>
                        <Link to='/'>Your Account</Link>
                        <Link to='/'>Become an Investor</Link>
                        <Link to='/'>Our Rates</Link>
                        <Link to='/'>Help</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer