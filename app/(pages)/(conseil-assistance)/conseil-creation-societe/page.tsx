
import styles from '@/app/(pages)/page.module.css'
import { CheckCircleIcon,HomeIcon,UserGroupIcon,BuildingOfficeIcon,BuildingOffice2Icon,BuildingLibraryIcon } from '@heroicons/react/20/solid';
import PageHero from '@/app/components/pageHero/pageHero'
import OtherService from '@/app/components/other-service/otherServics';
import Link from 'next/link'
import React from "react";

import Counter from '@/app/components/counter/counter';
export const metadata = {
	title: "Conseil en création de société - Axcel Company",
}

export default function Page() {

	return (
		<>
			<PageHero
				imgSrc="/hands-image.jpg"
				desc="En plus du conseil et de l'assistance administrative, nous proposons une gamme de services complets pour répondre aux besoins variés de nos clients en matière de gestion d'entreprise à Madagascar."
				btnText="Rentrons en contact"
			/>

			<div className="container">
				<div className="container my-lg-5 py-5">
					<div className="row justify-content-around px-3 align-items-center">
						<div className="col-sm-12 col-lg-6 py-5 ps-lg-5 axel-block1">
							<div className="border-2 border-dark">
								<div>
									<img src="/service/contact1.png" alt="prise en main" className="img-fluid"/>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-lg-6 p-auto pe-lg-5">
							<div className="d-flex flex-column mb-3">
								<h3 className="axel-text-orange fs-3 fw-bolder">Nous vous offrons</h3>
								<h2 className="axel-text-blue fw-bolder pt-3">Services professionnels aux entreprises</h2>
								<div className="border border-info border-2 w-25 my-3"></div>
								<p className='py-3'>Nous accompagnons  les entrepreneurs, les investisseurs dans la formalisation de leurs entreprises.</p>
								<div className="row row-cols-1 row-cols-md-2 g-5 mt-lg-2">
									<div className="col">
										<div className="card mb-3 h-100 border-0">
											<div className="row g-0">
												<div className="col-1">
													<CheckCircleIcon className={`${styles.icon} text-info fw-bolder`} />
												</div>
												<div className="col-11">
													<div className="card-body p-0 ps-2">
														<h4 className="card-title text-info">Conseil et assistance</h4>

														<p className="card-text"><small>Choix stratégique, prise de décision</small></p>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="col">
										<div className="card mb-3 h-100 border-0">
											<div className="row g-0">
												<div className="col-1">
													<CheckCircleIcon className={`${styles.icon} text-info fw-bolder`} />
												</div>
												<div className="col-11">
													<div className="card-body p-0 ps-2">
														<h4 className="card-title text-info">Création d'entreprise</h4>
														<p className="card-text"><small>EI / SARLU / Sarl</small></p>

													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="card mb-3 h-100 border-0">
											<div className="row g-0">
												<div className="col-1">
													<CheckCircleIcon className={`${styles.icon} text-info fw-bolder`} />
												</div>
												<div className="col-11">
													<div className="card-body p-0 ps-2">
														<h4 className="card-title text-info">Accompagnement</h4>

														<p className="card-text"><small>Lors de la création, business model, développement</small></p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="card mb-3 h-100 border-0">
											<div className="row g-0">
												<div className="col-1">
													<CheckCircleIcon className={`${styles.icon} text-info fw-bolder`} />
												</div>
												<div className="col-11">
													<div className="card-body p-0 ps-2">
														<h4 className="card-title text-info">Coursier administratif </h4>
														<p><small className="card-text">Livraisons administratives immédiates ou programmées</small></p>
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid bg-primary py-5 px-0">
				<div className={`${styles.bg} p-0 m-0`}>
					<div className='container py-5'>
						<div className="row d-flex justify-content-center py-5">
							<div className="col d-none d-lg-block"></div>
							<div className="col col-lg-8 d-flex  flex-column justify-content-center align-items-center">
								<h5 className="card-title f-bold fs-3 axel-text-orange py-3">Services</h5>
								<h2 className="text-white fs-2 fw-bolder text-center">Conseil en création de société</h2>
								<p className='text-white text-center'>Le conseil en création de société vise à accompagner les porteurs de projet dans le choix, la structuration, et la mise en place de leur entreprise. L’objectif est de garantir une base solide pour le lancement et le développement durable de l’activité.</p>
								<div className="border border-info border-2 w-25 my-3"></div>

							</div>
							<div className="col d-none d-lg-block"></div>
						</div>
						<div className="row row-cols-1 row-cols-md-2 g-5 mx-5 px-5">

							<div className="col">
								<div className="card h-100">
									<div className="card-header bg-transparent border-0">
										<HomeIcon className={`${styles.icon2} axel-text-orange`}/>
									</div>
									<div className="card-body">
										<h3 className="card-title">Choix de la structure juridique</h3>
										<p className="card-text">
											Conseils pour sélectionner la forme juridique adaptée (auto-entrepreneur, EURL, SARL, SAS, SASU, SCI, etc.).<br></br>
											Analyse des implications fiscales, sociales, et administratives de chaque statut.
										</p>
									</div>
								</div>
							</div>

							<div className="col">
								<div className="card h-100">
									<div className="card-header bg-transparent border-0">
										<HomeIcon className={`${styles.icon2} axel-text-orange`}/>
									</div>
									<div className="card-body">
										<h3 className="card-title">Démarches administratives</h3>
										<p className="card-text">
											Assistance à la rédaction des statuts de la société.<br></br>
											Réalisation des formalités d’immatriculation auprès du Registre du Commerce et des Sociétés (RCS) ou des Chambres de Métiers et de l’Artisanat (CMA).<br></br>
											Publication d’une annonce légale dans un journal habilité.
										</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card h-100">
									<div className="card-header bg-transparent border-0">
										<HomeIcon className={`${styles.icon2} axel-text-orange`}/>
									</div>
									<div className="card-body">
										<h3 className="card-title">Orientation vers les aides et subventions</h3>
										<p className="card-text">
											Identification des dispositifs d’aide à la création d’entreprise (ACRE, prêts d’honneur, subventions régionales).<br></br>
											Préparation des dossiers de candidature pour ces aides.
										</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card h-100">
									<div className="card-header bg-transparent border-0">
										<HomeIcon className={`${styles.icon2} axel-text-orange`}/>
									</div>
									<div className="card-body">
										<h3 className="card-title">Accompagnement post-création</h3>
										<p className="card-text">
											Mise en place d’outils de gestion et de suivi financier.<br></br>
											Conseils pour le développement commercial et stratégique.<br></br>
											Information sur les obligations légales et fiscales post-création.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center py-5">
							<a href="/devis" className="btn axel-btn-orange text-white">Demande de devis</a>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="container my-lg-5 py-5">
					<div className="row justify-content-around px-3 align-items-center">
						<div className="col-sm-12 col-lg-6 p-auto pe-lg-5">
							<div className="d-flex flex-column mb-3">
								<h3 className="axel-text-orange fs-3 fw-bolder">Notre Process</h3>
								<h2 className="axel-text-blue fw-bolder pt-3">Simplifier les processus administratifs et de garantir la conformité avec la réglementation en vigueur</h2>
								<div className="border border-info border-2 w-25 my-3"></div>
								<p className='py-3'>Permettant ainsi à nos clients de se concentrer sur le développement et la croissance de leur activité en toute tranquillité d'esprit.</p>
								<h5>Création d'entreprise </h5>
								<div className="progress">
									<div className="progress-bar" style={{width: '60'+'%'}}>60%</div>
								</div>
								<h5 className='pt-3'>Accompagnement</h5>
								<div className="progress">
									<div className="progress-bar" style={{width: '75'+'%'}}>75%</div>
								</div>
								<h5 className='pt-3'>Autres services</h5>
								<div className="progress">
									<div className="progress-bar" style={{width: '90'+'%'}}>90%</div>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-lg-6 py-5 ps-lg-5 axel-block1">
							<div className="border-2 border-dark">
								<div>
									<img src="/surplus.png" alt="prise en main" className="img-fluid"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Counter/>
			<OtherService/>

		</>
	);
}