"use client";
import { useEffect } from "react";
import  "bootstrap/dist/css/bootstrap.min.css"
import AddJsBootstrap from "./components/addJsBootstrap/addJsBootstrap"
import TopBar from "@/app/components/header/topbar/topbar"
import Navbar from "@/app/components/header/navbar/navbar"
import NavBarScroll from "@/app/components/header/navbar/navbarOnscroll"
import Footer from "@/app/components/footer/footer"
import Script from "next/script";
import '@/app/global.css';
export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
    useEffect(() => {
        const rows = document.querySelectorAll(".row"); // Sélectionne toutes les lignes (rows)

        rows.forEach((row) => {
            const cardsInRow = row.querySelectorAll(".card"); // Récupère toutes les cartes dans cette ligne
            const totalCards = cardsInRow.length; // Nombre total de cartes dans cette row

            cardsInRow.forEach((card, index) => {
                // Ajuste le délai proportionnellement à la position de la carte dans la row
                const delay = (index / totalCards) * 0.6; // Délai progressif (0.6s au total)
                card.style.transitionDelay = `${delay}s`; // Applique le délai à chaque carte
            });
        });

        // Configuration de l'IntersectionObserver pour observer les cartes
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const targetCard = entry.target;
                        targetCard.classList.add("animate"); // Ajoute la classe "animate" lorsque la carte entre dans la vue
                    } else {
                        // Si la carte n'est pas visible, on peut la remettre à son état initial (si nécessaire)
                        const targetCard = entry.target;
                        targetCard.classList.remove("animate");
                    }
                });
            },
            { threshold: 0.2 } // La carte doit être visible à 20% dans la fenêtre pour être animée
        );

        // Sélectionne toutes les cartes et les observe avec l'observateur
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
            observer.observe(card);
        });

        // Nettoyage de l'observateur à la fin
        return () => {
            cards.forEach((card) => {
                observer.unobserve(card);
            });
        };
    }, []);
    return (
      <html lang="en">
      <head>
        <link rel="icon" href="/favicon.co" sizes="any" />
        <Script type="text/javascript" src="/js/navscroll.js" />
      </head>
      <body>
      <AddJsBootstrap />
      <TopBar />
      <Navbar />
      <NavBarScroll />
      {children}
      <Footer />
      </body>
      </html>
  );
}