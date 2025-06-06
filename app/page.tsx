import { useRouter } from 'next/router'
import HeroSlider from "./components/sections/slider/heroSlider";
import AboutSection from "./components/sections/about/aboutSection";
import ServiceSection from "./components/sections/services/serviceSection";
import PerformanceSection from "./components/sections/performances/performanceSection";
import Properties from "./components/sections/Properties/PropertieSection";
export const metadata = {
    title: 'Conseil et assistance en création de société / entreprise à Madagascar',
    description: 'Une société dédiée à fournir des services professionnels aux entreprise',
    keywords: [
    'création société',
    'création entreprise',
    'assistance entreprise',
    'assistance société',
    'conseil en entreprise',
    'conseil en société',
    'ouvrir une société',
    'Services professionnels entreprises',
    'Conseil assistance création de société',
    'Conseil assistance création d’entreprise',
    'conseil assistance administrative',
    'Coursier administratif',
  ],
  }
  
export default function Page() {
    
    return (
        
            <>
                <HeroSlider />
                <AboutSection />
                <ServiceSection />
                <PerformanceSection />
                <Properties/>
            </>
    );

}