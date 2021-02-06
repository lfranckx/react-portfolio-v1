import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import {Link, NavLink} from 'react-router-dom';
import '../styles/Navbar.scss'

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
                            <NavLink to='/home'
                                 activeClassName={"selected"}
                                 className='nav-links'
                                 onClick={closeMobileMenu}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/about'
                                 activeClassName={"selected"}
                                 className='nav-links'
                                 onClick={closeMobileMenu}
                            >
                                About Me
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/portfolio'
                                activeClassName={"selected"}
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/resume'
                                activeClassName={"selected"}
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Resume
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'
                                activeClassName={"selected"}
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Contact</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;