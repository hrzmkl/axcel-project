import { useRouter } from 'next/router'
import HeroSlider from "./components/sections/slider/heroSlider";
import AboutSection from "./components/sections/about/aboutSection";
import ServiceSection from "./components/sections/services/serviceSection";
import PerformanceSection from "./components/sections/performances/performanceSection";
import Properties from "./components/sections/Properties/PropertieSection";
export const metadata = {
    title: 'Axcel company',
    description: 'Une société dédiée à fournir des services professionnels aux entreprise',
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