import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import './index.css'
import 'animate.css';
import ParallaxBackground from './components/parallax-background/ParallaxBackground.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import TourDescription from './components/tour-description/TourDescription.jsx'
import TourDescription2 from './components/tour-description/TourDescription2.jsx'
import RoadDetails from './components/road-details/RoadDetails.jsx'
import LogisticsDetails from './components/logistics-details/LogisticsDetails.jsx'
import RaceDetails from './components/race-details/RaceDetails.jsx'
import GeneralRules from './components/general-rules/GeneralRules.jsx'
import ClosingWords from './components/closing-words/ClosingWords.jsx'
import RouteDetails from './components/route-details/RouteDetails.jsx'
import Hero from './components/hero/Hero.jsx'
import { useEffect, useState } from 'react';
import Inscription from './components/inscription/Inscription.jsx'
import TourDescription1 from './components/tour-description/TourDescription1.jsx'
import TourDescription3 from './components/tour-description/TourDescription3.jsx'
import Patreons from './components/patreons/patreons.jsx'
gsap.registerPlugin(ScrollTrigger)


function App() {

  useEffect(() => {

    const sections = gsap.utils.toArray(".snap-section")

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        markers: false,
        snap: {
          snapTo: 1 ,
          duration: 0.5,
          ease: "power2.out"
        }
      })
    })

    console.log(sections.length);
    

  }, [])

  return (
    <>
      <Header />
      <ParallaxBackground>
        <main>
          <Hero className="snap-section" />
          <TourDescription />
          {/* <TourDescription1 className="snap-section"  />
          <TourDescription2 className="snap-section"  />
          <TourDescription3 className="snap-section"  /> */}
          <Inscription />
          <RouteDetails />
          <Patreons className="snap-section"  />
          {/* <RoadDetails className="snap-section" />
          <RaceDetails className="snap-section" />
          <LogisticsDetails className="snap-section" />
          <GeneralRules className="snap-section" />
          <ClosingWords className="snap-section" /> */}
        </main>
      </ParallaxBackground>
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
