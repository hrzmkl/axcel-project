
import styles from '@/app/(pages)/page.module.css'
import { CheckCircleIcon,HomeIcon,UserGroupIcon,BuildingOfficeIcon,BuildingOffice2Icon,BuildingLibraryIcon } from '@heroicons/react/20/solid';

import PageHero from '@/app/components/pageHero/pageHero'
import OtherService from '@/app/components/other-service/otherServics';
import React from "react";

import Counter from '@/app/components/counter/counter';
export const metadata = {
	title: 'Récupération des certificats de consommabilité - Axcel Company',
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
			<div className="container-fluid bg-primary my-5 px-0">
				<div className={`${styles.bg} pb-5 m-0`}>
					<div className='container py-5'>
						<div className="row d-flex justify-content-center py-5">
							<div className="col d-none d-lg-block"></div>
							<div className="col col-lg-8 d-flex  flex-column justify-content-center align-items-center">
								<h5 className="card-title f-bold fs-3 axel-text-orange py-3">Services</h5>
								<h2 className="text-white fs-2 fw-bolder text-center">RECUPERATION CERTIFICAT</h2>
								<div className="border border-info border-2 w-25 my-3"></div>

							</div>
							<div className="col d-none d-lg-block"></div>
						</div>

						<div className='row justify-content-center'>
							<div className="col"></div>
							<div className='col-8 px-5 mx-5'>
								<div className="card h-100 border-0 rounded-0">
									<div className="card-header border-0 p-0 bg-info rounded-0">
										<h3 className="card-title fs-5 text-center my-2 text-white">RECUPERATION CERTIFICAT DE CONSOMMABILITE
										</h3>
									</div>
									<div className="card-body border border-1 border-top-0 p-0">
										<ul className="list-group list-group-flush">
											<li className="list-group-item">

												<p className={`py-3`}>
													Un document officiel qui atteste qu'un produit alimentaire, tel que des boissons ou des aliments, respecte les normes sanitaires et peut être consommé sans risque pour la santé. À Madagascar, ce certificat est généralement exigé pour s'assurer que les produits mis en vente respectent les conditions de sécurité alimentaire.
												</p>
											</li>
											<li className="list-group-item">
												•	<span className='fw-bold axel-text-orange'>Document nécessaire</span><br></br>
												- Extrait RCS<br></br>
												- Photocopie carte fiscale et carte statistique<br></br>
												- Copie de la CIN du premier responsable<br></br>
												- Certificat  de résidence<br></br>
												- Statuts de la Société (pour les sociétés)<br></br>
												- Certificats de conformité aux normes sanitaires (si besoin)<br></br>
												- Photocopie CIN du premier responsable

											</li>
											<li className="list-group-item">
												•	<span className='fw-bold axel-text-orange'>Prestation Axcel Company : 100 000 Ar</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col"></div>
						</div>
					</div>
					<div className='container w-75 pb-5'>
						<h4 className='text-white'>NB :</h4>
						<p className='text-white fw-bold'>
							Il s'agit du dossier de base, cependant, il peut être ajusté en fonction des particularités de chaque activité et des exigences de l'autorité compétente. Les documents à fournir peuvent ainsi varier selon le cas spécifique.
						</p>
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