'use client'

import { useRouter } from 'next/navigation'

import HeroSlider from "./sections/slider/heroSlider"
import AboutSection from "./sections/about/aboutSection"
import ServiceSection from "./sections/services/serviceSection"
import PerformanceSection from "./sections/performances/performanceSection"
import Properties from "./sections/Properties/PropertieSection"

export default function HomeClient() {
 const router = useRouter()

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