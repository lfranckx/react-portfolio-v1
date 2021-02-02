import React from "react";
import '../../../styles/Process.css';

import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import { GiTalk, MdPhotoSizeSelectSmall, FaCode, MdDevices } from "react-icons/all";

export default function Process() {
    return (
        <div id={'process'}>
            <section className={'text-center'}>
                <h2 >My Creative Process</h2>
                <div className={'bottom-line'}></div>
                <p className={'lead'}>I start with figuring out what the customer wants their application to do and how they want it to look.</p>
                <div id={'timeline'}>
                    <ul>
                        <li className={'list-item'}>
                            <ScrollAnimation
                                animateIn="animate__fadeInRightBig"
                                offset={150}
                                duration={1}
                                animateOnce={true}
                            >
                                <div className={'card'}>
                                    <h3 className={'h1'}><GiTalk /></h3>
                                    <h3 className={'h2'}>Discuss</h3>
                                    <p className={'h3'}>Meet with client and discuss project needs and desired design.</p>
                                </div>
                            </ScrollAnimation>
                        </li>
                        <li className={'list-item'}>
                            <ScrollAnimation
                                animateIn="animate__fadeInLeftBig"
                                offset={150}
                                duration={1}
                                animateOnce={true}
                            >
                                <div className={'card'}>
                                    <h3 className={'h1'}><MdPhotoSizeSelectSmall /></h3>
                                    <h3 className={'h2'}>Design Wireframes</h3>
                                    <p className={'h3'}>Create wireframes based on the conversation so the client can see what the project would look like when finished.</p>
                                </div>
                            </ScrollAnimation>
                        </li>
                        <li className={'list-item'}>
                            <ScrollAnimation
                                animateIn="animate__fadeInRightBig"
                                offset={150}
                                duration={1}
                                animateOnce={true}
                            >
                                <div className={'card'}>
                                    <h3 className={'h1'}><FaCode /></h3>
                                    <h3 className={'h2'}>Write Code</h3>
                                    <p className={'h3'}>Write functional code while remaining in communication with the client at each step to make sure their needs haven't changed.</p>
                                </div>
                            </ScrollAnimation>
                        </li>
                        <li className={'list-item'}>
                            <ScrollAnimation
                                animateIn="animate__fadeInLeftBig"
                                offset={150}
                                duration={1}
                                animateOnce={true}
                            >
                                <div className={'card'}>
                                    <h3 className={'h1'}><MdDevices /></h3>
                                    <h3 className={'h2'}>Make Responsive</h3>
                                    <p className={'h3'}>Make sure the website or application is responsive on all of the devices of the user audience.</p>
                                </div>
                            </ScrollAnimation>
                        </li>
                        <li className={'list-item'}>
                            <ScrollAnimation
                                animateIn="animate__fadeInRightBig"
                                offset={150}
                                duration={1}
                                animateOnce={true}
                            >
                                <div className={'card'}>
                                    <h3 className={'h1'}><i className="far fa-calendar-check h1"></i></h3>
                                    <h3 className={'h2'}>Deliver Project</h3>
                                    <p className={'h3'}>Deliver the final product on time and with the approval of the client.</p>
                                </div>
                            </ScrollAnimation>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}