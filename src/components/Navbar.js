import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 1080) {
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
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        LFX Media
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/portfolio'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/resume'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/contact'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Contact</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;