import  "bootstrap/dist/css/bootstrap.min.css"
import AddJsBootstrap from "./components/addJsBootstrap/addJsBootstrap"
import TopBar from "@/app/components/header/topbar/topbar"
import Navbar from "@/app/components/header/navbar/navbar"
import NavBarScroll from "@/app/components/header/navbar/navbarOnscroll"
import Footer from "@/app/components/footer/footer"
import Script from "next/script";
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
        <Script type="text/javascript" src="./js/navscroll.js" /> 
      </head>
      <body>  
           
        <AddJsBootstrap/>
        <TopBar/>
        <Navbar />
        <NavBarScroll />
        
        {children}
        <Footer />
        </body>
    </html>
  )
}
