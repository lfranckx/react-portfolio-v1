import React from 'react';
import '../../../styles/App.css';
import '../../../styles/HeroSection.css';

import Process from "./Process";
import Footer from '../../Footer';
import Typical from "react-typical";
import { Button } from "../../Button";

export default function Home() {
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
                    <Button
                        className='btns view-work'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        View My Work &nbsp; <i id={'book'} className="fas fa-book"></i>
                        {/*<i className="fas fa-binoculars"></i>*/}
                    </Button>
                </div>
            </section>
            <section className={'container skills-container'}>
                <h2>Specialized Skills</h2>
                <p>Allowing my client's needs to dictate design while keeping responsiveness at the forefront.</p>
                <div className={'skills-list'}>
                    <div className={'skills-card'}>
                        <i className="fas fa-brain skill-icon"></i>
                        <h3>Conceptualize</h3>
                        <p className={'skills-desc'}>Planning out user stories and outlining the technical tasks to achieve the project's purpose</p>
                    </div>
                    <div className={'skills-card'}>
                        <i className="fas fa-code skill-icon"></i>
                        <h3>Development</h3>
                        <p className={'skills-desc'}>Writing functional front-end and back-end code that is testable and effective in its purpose.</p>
                    </div>
                    <div className={'skills-card'}>
                        <i className="fas fa-tv skill-icon"></i>
                        <h3>Design</h3>
                        <p className={'skills-desc'}>Making the project look as good as it functions</p>
                    </div>
                    <div className={'skills-card'}>
                        <i className="fas fa-user skill-icon"></i>
                        <h3>UI/UX</h3>
                        <p className={'skills-desc'}>Making the user experience as good as the code that drives it.</p>
                    </div>
                </div>
                {/*<div className={'skills-container'}>*/}
                {/*    <div>*/}
                {/*        <i className="fas fa-users skill-icon"></i>*/}
                {/*        <h3>Clients</h3>*/}
                {/*        <p className={'skills-desc'}>3</p>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <i className="fas fa-globe-americas skill-icon"></i>*/}
                {/*        <h3>Deployed Projects</h3>*/}
                {/*        <p className={'skills-desc'}>6</p>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <i className="fas fa-code-branch skill-icon"></i>*/}
                {/*        <h3>Github Contributions</h3>*/}
                {/*        <p className={'skills-desc'}>500+</p>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <i className="fas fa-laptop-house skill-icon"></i>*/}
                {/*        <h3>Small Projeects</h3>*/}
                {/*        <p className={'skills-desc'}>16</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
            <Process />
            <Footer />
        </>
    );
}