import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
<div className='footer-section' id='signup'>
    <div className='footer-wrapper'>
            <h1 className='footer-header'>Get Waterfalls newsletter delivered to your inbox every Wednesday!</h1>
            <p className='footer-para'>You can unsubscribe at any time.</p>
        <div className='subscription-box'>
            <input type='email' placeholder='Your Email' name='email'></input>
            <button className='subscribe'>Subscribe</button>
        </div>
    </div>   
        <div className='footer-links'>
            <div className='footer-links-wrapper'>
                <div className='wrapper-items'>
                    <h2>About Us</h2>
                    <a href='#'>How it works</a>
                    <a href='#'>Testimonials</a>
                    <a href='#'>Careers</a>
                    <a href='#'>Investors</a>
                    <a href='#'>Terms of Service</a>
                </div>
                <div className='wrapper-items'>
                    <h2>Contact Us</h2>
                    <a href='#'>Contact</a>
                    <a href='#'>Support</a>
                    <a href='#'>Destinations</a>
                    <a href='#'>Sponsorship</a>
                </div>
            </div>
            <div className='footer-links-wrapper'>
                <div className='wrapper-items'>
                    <h2>Videos</h2>
                    <a href='#'>Submit Video</a>
                    <a href='#'>Ambassadors</a>
                    <a href='#'>Agency</a>
                    <a href='#'>Influencer</a>
                </div>
                <div className='wrapper-items'>
                    <h2>Social Media</h2>
                    <a href='#'>Instagram</a>
                    <a href='#'>Facebook</a>
                    <a href='#'>Youtube</a>
                    <a href='#'>Twitter</a>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
            <div className='footer-year'>
                <small className='website-rights'>Maulik Soni &copy;2021</small>
            </div>
            <div className='social-icons'>
                
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-twitter"></i>
           
            </div>
            </div>
        </section>
    </div>
       
        </>
    )
}

export default Footer;
