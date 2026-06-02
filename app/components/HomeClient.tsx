'use client'
import HeroSlider from "./sections/slider/heroSlider"
import AboutSection from "./sections/about/aboutSection"
import ServiceSection from "./sections/services/serviceSection"
import PerformanceSection from "./sections/performances/performanceSection"
import Properties from "./sections/Properties/PropertieSection"

export default function HomeClient() { 

  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ServiceSection />
      <PerformanceSection />
      <Properties />
    </>
  )
}