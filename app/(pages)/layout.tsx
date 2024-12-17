import styles from './page.module.css'
import Link from 'next/link'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  
    return (
    <>
      
        {children}
    </>
    )
}
