import React from 'react'
import CastleRental from '../components/CastleRental'
import { CheckOutForm } from '../components/CheckOutForm'
import { Details } from '../components/Details'
import HomeGallery from '../components/GallerySection'
import { PayPalCheckOut2, TheToddler4hr } from '../components/PayPalCheckOut'
import { ServiceSection } from '../components/ServiceSection'
import Tabs from '../components/Tabs'
import TestComp from '../components/TestComp'
import {HeroSection} from './../components/HeroSection'
export const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <CastleRental />
        <Tabs />
        <ServiceSection />
        <Details />
        <HomeGallery />
    </div>
  )
}
