import React, { useEffect } from "react";
import Footer from "../Footer";
import '../../styles/Portfolio.scss';

export default function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <main className={'portfolio'}>
                <section>
                    <h1 className={'h2'}>Professional Work</h1>
                    <div className='projects'>

                    </div>
                </section>

                <section>
                    <h1 className={'h2'}>Full-Stack Projects</h1>
                    <div className={'projects'}>
                        
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}