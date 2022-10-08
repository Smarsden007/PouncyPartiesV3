import React from 'react'
import CastleRental from '../components/CastleRental'
import Checkout1 from '../components/Checkouts'
import { Details } from '../components/Details'
import HomeGallery from '../components/GallerySection'
import { ServiceSection } from '../components/ServiceSection'
import Tabs from '../components/Tabs'
import {HeroSection} from './../components/HeroSection'
export const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <Checkout1 />
        <CastleRental />
        <Tabs />
        <ServiceSection />
        <Details />
        <HomeGallery />
    </div>
  )
}
