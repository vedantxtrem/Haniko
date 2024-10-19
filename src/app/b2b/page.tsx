'use client'

import { Parallax } from 'react-parallax';


export default function Page() {
    return (
        <>
            <Parallax
                blur={5}
                bgImage="https://static01.nyt.com/images/2022/12/12/us/12xp-bees1/12xp-bees-02-superJumbo.jpg"
                bgImageAlt="the cat"
                strength={200}
                className="h-72"
            >
                Content goes here. Parallax height grows with content height.
            </Parallax>

            <div className="h-72"></div>
            <div className="h-72"></div>
            <div className="h-72"></div>
            <div className="h-72"></div>
            <div className="h-72"></div>
        </>
    )
}