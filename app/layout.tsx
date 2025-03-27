"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import AddJsBootstrap from "./components/addJsBootstrap/addJsBootstrap";
import TopBar from "@/app/components/header/topbar/topbar";
import Navbar from "@/app/components/header/navbar/navbar";
import NavBarScroll from "@/app/components/header/navbar/navbarOnscroll";
import Footer from "@/app/components/footer/footer";
import Script from "next/script";
import "@/app/global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	const activateAnimations = () => {
		const rows = document.querySelectorAll(".row");

		rows.forEach((row) => {
			const cardsInRow = row.querySelectorAll(".card");
			const totalCards = cardsInRow.length;

			cardsInRow.forEach((card, index) => {
				if (card instanceof HTMLElement) {
					const delay = (index / totalCards) * 0.6;
					card.style.setProperty("--animation-delay", `${delay}s`); // ✅ Variable CSS pour l'animation d'apparition
				}
			});
		});

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const target = entry.target as HTMLElement | null; // ✅ Vérification que target est bien un HTMLElement
					if (target) {
						if (entry.isIntersecting) {
							target.classList.add("animate");
						} else {
							target.classList.remove("animate");
						}
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
		activateAnimations();
	}, [pathname]);

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
