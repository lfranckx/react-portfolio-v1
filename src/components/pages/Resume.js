import React from "react";
import '../../styles/Resume.css';
import Footer from '../Footer';

export default function Resume()  {

    let arrow = <i className="fas fa-chevron-down"></i>;

    const toggleVisibility = (id) => {
        const selection = document.getElementById(id);
        if (selection.style.display === "none") {
            selection.style.display = "block";
        } else {
            selection.style.display = "none";
        }
        toggleArrow();
    }

    const toggleArrow = (id) => {
        if (arrow === <i className="fas fa-chevron-right"></i>) {
            return arrow = <i className="fas fa-chevron-down"></i>
        } else {
            return arrow = <i className="fas fa-chevron-right"></i>
        }
    }

    return (
        <div className={'resume-page'}>
            <div className={'resume-container'}>
                <div className={'download-resume'}>
                    <a href={'/Docs/Web Dev Resume - Blue.pdf'} download={'/Docs/Web Dev Resume - Blue.pdf'}>Download Copy</a>
                </div>
                <section className={'resume-contact section'}>
                    <div className={'contact-item'}>
                        <div className={'flex'}>
                            <button className={'arrow'} onClick={() => toggleVisibility('section1')}>{arrow}</button>
                            <h2>&nbsp; Lachlan Franckx</h2>
                        </div>
                        <h3>Full-stack Developer</h3>
                    </div>
                    <div id={'section1'} className={'pad-u-2 pad-s-2'}>
                        <div>
                            <div className={'contact-item'}>
                                <p>Los Angeles, CA</p>
                                <a href={'https://github.com/lfranckx'}><i className="fab fa-github" /> /lfranckx</a>
                            </div>
                            <div className={'contact-item'}>
                                <p>(408)499-2830</p>
                                <a href={'https://www.linkedin.com/in/lachlanfranckx/'}><i className="fab fa-linkedin" /> /lachlanfranckx</a>
                            </div>
                            <div className={'contact-item'}>
                                <a href={'mailto: lfranckx@gmail.com'}>
                                    <i className="fas fa-envelope" /> lfranckx@gmail.com
                                </a>
                                <a href={'/'}>
                                    <i className="fab fa-facebook-f" /> /lfranckx
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={'resume-skills section'}>
                    <div className={'flex'}>
                        <button className={'arrow'} onClick={() => toggleVisibility('section2')}>{arrow}</button>
                        <h3>&nbsp; Skills</h3>
                    </div>
                    <div id={'section2'} className={'pad-u-2 pad-s-2'}>
                        <ul id={'accordion'}>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>PostgreSQL</li>
                            <li>AWS-S3</li>
                            <li>jQuery</li>
                            <li>Shopify</li>
                            <li>Heroku</li>
                            <li>Zeit</li>
                            <li>RESTful APIs</li>
                            <li>AJAX</li>
                            <li>Multer</li>
                            <li>Enzyme</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Git/Github</li>
                            <li>Chrome Dev Tools</li>
                            <li>Google Analytics</li>
                        </ul>
                    </div>
                </section>

                <section className={'resume-projects section'}>
                    <div className={'flex'}>
                        <button className={'arrow'} onClick={() => toggleVisibility('section3')}>{arrow}</button>
                        <h3>&nbsp; Full-Stack Applications</h3>
                    </div>
                    <div id={'section3'} className={'pad-u-2 pad-s-2'}>
                        <div className={'travelog'}>
                            <a className={'project-name'} href={'/'}>Travelog</a> | <a href={'/'}>Github</a>
                            <ul>
                                <li>Travel blogging sites for travel enthusiasts to connect and share stories and communicate on a unique platform.</li>
                                <li>Focused on creating great product usability and building an elegant UI to enhance the user experience.</li>
                                <li>Built an Express server that uses Multer middleware to communicate with an AWS S3 bucket for file storage
                                    and integrates with a relational database using PostgreSQL and Knex.</li>
                            </ul>
                        </div>
                        <div className={'workout-app section'}>
                            <a className={'project-name'} href={'/'}>Workout App</a> | <a href={'/'}>Github</a>
                            <ul>
                                <li>Worked in a pair programming team to find solutions to previous bugs and problems within the app.</li>
                                <li>Restructured the user authentication using JWT and built a Stopwatch component using React Hooks.</li>
                                <li>Worked in a team environment with a web designer and developer to implement designs, responsiveness, and functionality of the app.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={'client-projects section'}>
                    <div className={'flex'}>
                        <button className={'arrow'} onClick={() => toggleVisibility('section4')}>{arrow}</button>
                        <h3>&nbsp; Professional Client Projects</h3>
                    </div>

                    <div  id={'section4'} className={'omg-artistry pad-u-2 pad-s-2'}>
                        <a className={'project-name'} href={'/'}>OMG Artistry</a> | <a href={'/'}>Github</a>
                        <ul>
                            <li>Restructured the layout of a Shopify store making it more easy for customers to navigate through the site.</li>
                            <li>Created live feeds from the client's Podcasts and Youtube channels</li>
                            <li>Created a way for the </li>
                        </ul>
                    </div>
                </section>

                <section className={'resume-education section'}>
                    <div className={'flex'}>
                        <button className={'arrow'} onClick={() => toggleVisibility('section5')}>{arrow}</button>
                        <h3>&nbsp; Education</h3>
                    </div>
                    <div id={'section5'} className={'pad-u-2 pad-s-2'}>
                        <h4>Bloc</h4>
                        <h4>Web Development Career Training</h4>
                        <ul>
                            <li>Full-stack coding course focused on the iterative development cycle using new technologies and industry best practices.</li>
                            <li>Studied as an apprentice underneath the guidance of an industry professional.</li>
                            <li>Built Express servers and relational databases using PostgreSQL and Knex which support all CRUD operations.</li>
                            <li>Managed complex projects using agile development and maintaining version control using Git and Github.</li>
                        </ul>
                    </div>
                </section>

                <section className={'resume-experience section'}>
                    <div className={'flex'}>
                        <button className={'arrow'} onClick={() => toggleVisibility('section6')}>{arrow}</button>
                        <h3>&nbsp; Experience</h3>
                    </div>
                    <div id={'section6'} className={'pad-u-2 pad-s-2'}>
                        <div>
                            <h4>Freelance</h4>
                            <ul>
                                <li>Worked with a management company for a celebrity hair and make-up artist to help optimize her online store for SEO and boost online sales.</li>
                                <li>Exceptional problem solving and decision making capabilities offering clients an array of solutions to choose from to best suit their needs.</li>
                                <li></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Musician/Producer</h4>
                            <ul>
                                <li>Recorded and toured professionally across the country and internationally teaching me skills in independence, collaboration, time-management, flexibility, boldness, self-sufficiency, improvisation, and self-marketing.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}