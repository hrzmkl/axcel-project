"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // ✅ Utilisation de usePathname
import "bootstrap/dist/css/bootstrap.min.css";
import AddJsBootstrap from "./components/addJsBootstrap/addJsBootstrap";
import TopBar from "@/app/components/header/topbar/topbar";
import Navbar from "@/app/components/header/navbar/navbar";
import NavBarScroll from "@/app/components/header/navbar/navbarOnscroll";
import Footer from "@/app/components/footer/footer";
import Script from "next/script";
import "@/app/global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname(); // 🔄 Détecte les changements de page

	// Fonction pour activer les animations
	const activateAnimations = () => {
		const rows = document.querySelectorAll(".row");

		rows.forEach((row) => {
			const cardsInRow = row.querySelectorAll(".card");
			const totalCards = cardsInRow.length;

			cardsInRow.forEach((card, index) => {
				const delay = (index / totalCards) * 0.6;
				card.style.transitionDelay = `${delay}s`;
			});
		});

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("animate");
					} else {
						entry.target.classList.remove("animate");
					}
				});
			},
			{ threshold: 0.2 }
		);

		const cards = document.querySelectorAll(".card");
		cards.forEach((card) => observer.observe(card));

		return () => {
			cards.forEach((card) => observer.unobserve(card));
		};
	};

	useEffect(() => {
		activateAnimations(); // ✅ Active les animations à chaque changement de page
	}, [pathname]); // 🔥 Relance l'animation quand l'URL change

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
