import React from 'react';
import '../styles/Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <h3>Contact Me</h3>
            <Link to='/'>
                <i className="fas fa-paper-plane"></i>&nbsp; Email
            </Link>

            <section className='social-media'>
                <div className='social-icons'>
                    <Link
                        className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                    >
                        <i className='fab fa-facebook-f icon' />
                    </Link>
                    <Link
                        className='social-icon-link instagram icon'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                    >
                        <i className='fab fa-instagram icon' />
                    </Link>
                    <Link
                        className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                    >
                        <i className='fab fa-youtube icon' />
                    </Link>
                    <Link
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                    >
                        <i className='fab fa-twitter icon' />
                    </Link>
                    <Link
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                    >
                        <i className='fab fa-linkedin icon' />
                    </Link>
                    <Link
                        className='social-icon-link github'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                    >
                        <i className="fab fa-github icon"></i>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Footer;