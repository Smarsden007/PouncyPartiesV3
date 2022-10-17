import React from "react";
import CastleRental from "../components/CastleRental";
import { Details } from "../components/Details";
import HomeGallery from "../components/GallerySection";
import { ServiceSection } from "../components/ServiceSection";
import Tabs from "../components/Tabs";
import { HeroSection } from "./../components/HeroSection";
import { CalendlyRun } from "./../components/Calendy";
import { ColorSelector } from "../components/ColorSelector";
import { ColorTwo } from "../components/ColorTwo";
export const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CalendlyRun />
      <ColorTwo />
      <CastleRental />
      <Tabs />
      <ServiceSection />
      <Details />
      <HomeGallery />
    </div>
  );
};
