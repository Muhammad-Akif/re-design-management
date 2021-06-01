import React from 'react'
import { useState, useEffect } from 'react'
import { Navbar } from '../components/navbar'
import BackgroundVideo from '../components/BackgroundVideo'
import { About } from '../components/about'
import { Services } from '../components/services'
import { Testimonials } from '../components/testimonials'
import { Team } from '../components/Team'
import { Contact } from '../components/contact'
import Recents from '../components/Carousel'
import JsonData from '../data/data.json'
import SmoothScroll from 'smooth-scroll'

import NewNav from '../components/NewNav'



export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})
export default function Home() {
    const [landingPageData, setLandingPageData] = useState({})
    useEffect(() => {
        setLandingPageData(JsonData)
    }, [])
    return (
        <div>
            {/* <Navbar /> */}
            <NewNav />
            {/* <BackgroundVideo /> */}
            <Services data={landingPageData.Services} />
            <About data={landingPageData.About} />
            {/* <Recents /> */}
            <Testimonials data={landingPageData.Testimonials} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
            <div class="gototop js-top">
                <a href="#" style={{backgroundColor: '#F14E95',borderRadius: '50px'}}><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
            </div>
        </div>
    )
}
