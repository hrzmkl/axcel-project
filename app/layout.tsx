"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import AddJsBootstrap from "./components/addJsBootstrap/addJsBootstrap";
import TopBar from "@/app/components/header/topbar/topbar";
import Navbar from "@/app/components/header/navbar/navbar";
import NavBarScroll from "@/app/components/header/navbar/navbarOnscroll";
import Footer from "@/app/components/footer/footer";
import Script from "next/script";
import "@/app/global.css";
import PreloaderWrapper from "@/app/components/Preloader/PreloaderWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const [isHydrated, setIsHydrated] = useState(false);

	// Animation à l'affichage des cartes
	const activateAnimations = () => {
		const rows = document.querySelectorAll(".row");

		rows.forEach((row) => {
			const cardsInRow = row.querySelectorAll(".card");
			const totalCards = cardsInRow.length;

			cardsInRow.forEach((card, index) => {
				if (card instanceof HTMLElement) {
					const delay = (index / totalCards) * 0.6;
					card.style.setProperty("--animation-delay", `${delay}s`);
				}
			});
		});

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const target = entry.target as HTMLElement | null;
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

	// Hydratation + suppression du preloader HTML statique
	useEffect(() => {
		setIsHydrated(true);
		activateAnimations();

		const staticPreloader = document.getElementById("initial-preloader");
		if (staticPreloader) {
			staticPreloader.style.opacity = "0";
			staticPreloader.style.pointerEvents = "none";

			setTimeout(() => {
				staticPreloader.remove();
			}, 300); // attendre que l'opacité soit à 0 avant de supprimer
		}
	}, [pathname]);

	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.co" sizes="any" />
				<Script type="text/javascript" src="/js/navscroll.js" />
			</head>
			<body>
				{/* ✅ Preloader HTML pur qui s'affiche dès le début */}
				<div
					id="initial-preloader"
					style={{
						position: "fixed",
						inset: 0,
						backgroundColor: "#fff",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						zIndex: 99999,
						transition: "opacity 0.3s ease",
					}}
				>
					<div className="text-center">
						{/* Spinner avec logo au centre */}
						<div className="position-relative mx-auto" style={{ width: "120px", height: "120px" }}>
							<div
								className="spinner-border text-primary w-100 h-100 position-absolute top-0 start-0"
								style={{
									width: "120px",
									height: "120px",
									borderWidth: "0.3rem",
								}}
								role="status"
							>
								<span className="visually-hidden">Chargement...</span>
							</div>

							{/* Logo centré */}
							<div className="position-absolute top-50 start-50 translate-middle">
								<img
									src="/axcel-company-logo-transparent-99-104-.png"
									alt="Axcel company logo"
									width="80"
									height="80"
									style={{ objectFit: "contain", borderRadius: "0.375rem" }}
								/>
							</div>
						</div>

							<div className="mt-4 fw-medium text-dark">Chargement...</div>
					</div>
				</div>

				{/*Preloader dynamique pour changements de page */}
				{isHydrated && <PreloaderWrapper />}

				{/* Contenu principal de l'app */}
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
