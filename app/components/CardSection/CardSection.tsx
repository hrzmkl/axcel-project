"use client";
import { motion } from "framer-motion";
import React from 'react';
import { useInView } from "react-intersection-observer";
import { CheckCircleIcon,HomeIcon } from '@heroicons/react/20/solid';
import styles from '@/app/(pages)/page.module.css'


// 🎴 Composant CardSection pack EI
export function CardSectionPackEi() {
	return (
		<div className="row row-cols-1 row-cols-md-3 g-5 px-5 pb-5">
			{[0, 1, 2].map((index) => {
				return (
					<motion.div
						key={index}
						className="col"
					>
						<motion.div className="card h-100">
							<div className="card-header bg-transparent p-0 border-0">
								<h2 className="text-center text-info fw-bold p-3">
									{index === 0 ? "PACK « NY ANTSIKA »" : index === 1 ? "PACK « TAFARAY »" : "PACK « JIABY JIABY »"}
								</h2>
								<h3 className="card-title text-center axel-bg-orange p-4">
									{index === 0
										? "NIF – STAT"
										: index === 1
											? "NIF – STAT – RCS"
											: "NIF – STAT – RCS + Préparation des documents"}
								</h3>
							</div>
							<div className="card-body">
								<h5>TARIFS : {index === 0 ? "200 000 Ar" : index === 1 ? "240 000 Ar" : "270 000 Ar"} </h5>
								<p>Hors frais administratif</p>
								<ul>
									<li>Fiable</li>
									<li>Rapide</li>
									<li>Sans déplacement</li>
									<li>Durée de traitement : 3 jours ouvrables</li>
								</ul>
							</div>
						</motion.div>
					</motion.div>
				);
			})}
		</div>
	);
}

// 🎴 Composant CardSectionEI
export function CardSectionEI() {
	return (
		<div className="row row-cols-1 row-cols-md-3 g-5">
			{[0, 1, 2].map((index) => {

				return (
					<motion.div
						key={index}
						className="col"
					>
						<motion.div className="card h-100">
							<div className="card-header bg-transparent border-0">
								<HomeIcon className={`${styles.icon2} axel-text-orange`} />
							</div>
							<div className="card-body">
								<h3 className="card-title">
									{index === 0
										? "Choisir le statut juridique"
										: index === 1
											? "Déterminer votre activité"
											: "Préparer les documents nécessaires"}
								</h3>

									{index === 0
										?(<>
											<ul>
												<li>EI (Entreprise Individuelle) : La forme la plus simple, mais le patrimoine personnel et professionnel sont confondus.</li>
												<li>Micro-entreprise (anciennement auto-entreprise) : Simplification administrative et fiscale pour les petites activités.</li>
											</ul>
										</>)
										: index === 1
											? "Commerciale : Achat et revente de biens. Artisanale : Travaux manuels ou production. Libérale : Activités intellectuelles (consultants, médecins, etc.)."
											: (
												<>
													Une copie de votre pièce d’identité.<br></br>
													Une déclaration de non-condamnation.<br></br>
													Un justificatif de domicile.<br></br>
													Une attestation de domiciliation de l’entreprise (si différente de votre domicile).
												</>
											)
									}

							</div>
						</motion.div>
					</motion.div>
				);
			})}
		</div>
	);
}


// 🎴 Composant CardSectionFraisAdmins


export function CardSectionFraisAdmins() {
	return (
		<div className="row row-cols-1 row-cols-md-3 g-5">
			{[0, 1, 2].map((index) => {
				const cardContent = [
					{
						title: "Tana 1ère arrondissement",
						prestation: "Prestation Axcel Company",
						honoraires: "200 000 Ar",
						fraisAdministratifs: "140 000 Ar",
						impots: "à partir de 150 000 Ar selon vos activités",
						total: "490 000 Ar si impôt 150 000 Ar",
						duree: "3 jours ouvrables",
						dossier: [
							"3 CIN certifiés",
							"3 certificats de résidence",
							"2 plans de repérage visés par Fokotany",
							"1 lettre de demande visée par Fokotany",
							"3 procurations légalisées"
						]
					},
					{
						title: "Tana 2ème arrondissement",
						prestation: "Prestation Axcel Company",
						honoraires: "200 000 Ar",
						fraisAdministratifs: "140 000 Ar",
						impots: "à partir de 150 000 Ar à 320 000 Ar selon vos activités",
						total: "490 000 Ar à 660 000 Ar",
						duree: "3 jours ouvrables",
						dossier: [
							"3 CIN certifiés",
							"3 certificats de résidence",
							"2 plans de repérage visés par Fokotany",
							"3 procurations légalisées"
						]
					},
					{
						title: "Tana 3ème arrondissement",
						prestation: "Prestation Axcel Company",
						honoraires: "200 000 Ar",
						fraisAdministratifs: "140 000 Ar",
						impots: "150 000 Ar",
						total: "490 000 Ar si impôt 150 000 Ar",
						duree: "3 jours ouvrables",
						dossier: [
							"3 CIN certifiés",
							"3 certificats de résidence",
							"2 plans de repérage visés par Fokotany",
							"3 procurations légalisées",
							"4 contrat de bail originaux (si locataire) ou pièce justificatif si propriétaires",
							"1 copie facture JIRAMA",
							"1 photocopie CIN du propriétaire"
						]
					}

				];

				return (
					<motion.div
						key={index}
						className="col"
					>
						<motion.div className="card h-100">
							<div className="card-body">
								<h3 className="card-title axel-text-orange py-2">
									{cardContent[index].title}
								</h3>
								<ul>
									<li>
										<span className="text-info">{cardContent[index].prestation}</span>
										<br />
										- Honoraire : {cardContent[index].honoraires}
										<br />
										- Frais administratifs fixes : {cardContent[index].fraisAdministratifs}
										<br />
										- Impôt : {cardContent[index].impots}
									</li>
									<ul>
										<li>
											<strong>TOTAL BUDGET</strong> : {cardContent[index].total}
										</li>
										<li>
                      <span className="text-info">
                        <strong>Durée de traitement du dossier</strong>
                      </span>
											: {cardContent[index].duree}
										</li>
									</ul>
									<li>
										<span className="text-info">Dossier à fournir</span>
										<br />
										{cardContent[index].dossier.map((item, i) => (
											<React.Fragment key={i}>
												- {item}
												<br />
											</React.Fragment>
										))}
									</li>
								</ul>
							</div>
						</motion.div>
					</motion.div>
				);
			})}
		</div>
	);
}