import React, { useEffect } from "react";

export default function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={'portfolio'}>
            <section>
                <h2>Full-stack Projects</h2>
                <div className={'p1'}>

                </div>
                <div className={'p2'}>

                </div>
                <div className={'p3'}>

                </div>
            </section>

            <section>
                <h2>Freelance Client Work</h2>
            </section>
        </div>
    )
}