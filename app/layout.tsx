import  "bootstrap/dist/css/bootstrap.min.css"
import AddJsBootstrap from "./components/addJsBootstrap/addJsBootstrap"
import AddJsCarousel from "./components/addJsBootstrap/addJsBootstrap"
import TopBar from "@/app/components/header/topbar/topbar"
import Navbar from "@/app/components/header/navbar/navbar"
import NavBarScroll from "@/app/components/header/navbar/navbarOnscroll"
import Footer from "@/app/components/footer/footer"
import '@/app/global.css';

export const metadata = {
  title: 'Axcel company',
  description: 'Une société dédiée à fournir des services professionnels aux entreprise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html lang="en">
      
      <head>
        <link rel="icon" href="/favicon.co" sizes="any" />      
      
      </head>
      <body>
        <AddJsBootstrap/>
        <AddJsCarousel/>
        <TopBar/>
        <Navbar />
        <NavBarScroll />
        
        {children}
        <Footer />
        </body>
    </html>
  )
}
