import React from 'react'
import CastleRental from '../components/CastleRental'
import Checkout1 from '../components/Checkouts'
import { Details } from '../components/Details'
import HomeGallery from '../components/GallerySection'
import { ServiceSection } from '../components/ServiceSection'
import Tabs from '../components/Tabs'
import {HeroSection} from './../components/HeroSection'
import {CalendlyRun} from './../components/Calendy'
export const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <CalendlyRun />
       
        <CastleRental />
        <Tabs />
        <ServiceSection />
        <Details />
        <HomeGallery />
    </div>
  )
}
