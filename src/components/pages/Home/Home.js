import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../../styles/Home.scss';

import Process from "./Process";
import Footer from '../../Footer';
import Typical from "react-typical";

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section className='hero-container'>
                <video src='/videos/video-1.mp4' autoPlay loop muted />
                <h1>I am Lachlan, a
                    <Typical
                        className={"typical"}
                        steps={['React Developer.', 2500, 'Full-stack Engineer.', 2500, 'Web Designer.', 2500]}
                        loop={Infinity}
                    />
                </h1>
                <h2>I build web applications with a focus on the end user.</h2>

                <div className='hero-btns'>
                    <Link to={'/portfolio'}
                        className='btn view-work .btn--large .btn--outline'
                    >
                        View My Work &nbsp; <i id={'book'} className="fas fa-book"></i>
                    </Link>
                </div>
            </section>
            <section className={'container skills-container'}>
                <div>
                    <h3 className={'h3'}>I specialize in </h3>
                    <div className={'bottom-line'}></div>
                    <h3 className={'h4'}>Allowing my client's needs to dictate design while keeping responsiveness at the forefront.</h3>
                </div>
                <ul className={'skills-list'}>
                    <li className={'skills-card'}>
                        <i className="fas fa-brain skill-icon"></i>
                        <h3>Conceptualize</h3>
                        <p className={'skills-desc'}>Planning out user stories and outlining the technical tasks to achieve the project's purpose</p>
                    </li>
                    <li className={'skills-card'}>
                        <i className="fas fa-code skill-icon"></i>
                        <h3>Development</h3>
                        <p className={'skills-desc'}>Writing functional front-end and back-end code that is testable and effective in its purpose.</p>
                    </li>
                    <li className={'skills-card'}>
                        <i className="fas fa-tv skill-icon"></i>
                        <h3>Design</h3>
                        <p className={'skills-desc'}>Making the project look as good as it functions.</p>
                    </li>
                    <li className={'skills-card'}>
                        <i className="fas fa-user skill-icon"></i>
                        <h3>UI/UX</h3>
                        <p className={'skills-desc'}>Making the user experience as good as the code that drives it.</p>
                    </li>
                </ul>
            </section>
            <Process />
            <Footer />
        </>
    );
}