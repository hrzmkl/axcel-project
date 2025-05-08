
import styles from '@/app/(pages)/page.module.css'
import { CheckCircleIcon,HomeIcon,UserGroupIcon,BuildingOfficeIcon,ScaleIcon,HandThumbUpIcon,BookOpenIcon } from '@heroicons/react/20/solid';
import PageHero from '@/app/components/pageHero/pageHero'
import OtherService from '@/app/components/other-service/otherServics';
import React from "react";
import Counter from '@/app/components/counter/counter';
import OfferDeals from "@/app/components/offerDeals/OfferDeals";
export const metadata = {
	title: "Création d'une association - Axcel Company",
}

export default function Page() {

	return (
		<>
			<PageHero
				imgSrc="/hands-image.jpg"
				desc="En plus du conseil et de l'assistance administrative, nous proposons une gamme de services complets pour répondre aux besoins variés de nos clients en matière de gestion d'entreprise à Madagascar."
				btnText="Rentrons en contact"
			/>


			<div className="container-fluid bg-primary px-0">
				<div className={`${styles.bg} p-0 m-0`}>
					<div className='container py-5'>
						<div className="row d-flex justify-content-center py-5">
							<div className="col d-none d-lg-block"></div>
							<div className="col col-lg-8 d-flex  flex-column justify-content-center align-items-center">
								<h5 className="card-title f-bold fs-3 axel-text-orange py-3">Services</h5>
								<h2 className="text-white fs-2 fw-bolder text-center">Création association</h2>
								<p className='text-white text-center'>La création d'une association en France est régie par la loi de 1901 qui permet de constituer une structure à but non lucratif</p>
								<div className="border border-info border-2 w-25 my-3"></div>

							</div>
							<div className="col d-none d-lg-block"></div>
						</div>
						<div className="row row-cols-1 row-cols-md-3 g-5 justify-content-center mb-5">
							<div className="col text-center">
								<img src="/service/association-axcel.webp" alt="association" className="img-fluid"/>
							</div>
							<div className="col text-center">
								<img src="/service/diversity-association.jpg" alt="diversités" className="img-fluid"/>
							</div>
						</div>
						<div className="row row-cols-1 row-cols-md-3 g-5 justify-content-center">
							<div className="col">
								<div className="card h-100 text-center">
									<div className="card-header bg-transparent border-0">
										<HandThumbUpIcon className={`${styles.icon2} axel-text-orange`}/>
									</div>
									<div className="card-body">
										<h5 className="card-title">But non lucratif </h5>
										<p className="card-text">Les bénéfices réalisés par l'association doivent être réinvestis dans ses activités plutôt que distribués à des membres.</p>
									</div>

								</div>
							</div>
							<div className="col">
								<div className="card h-100 text-center">
									<div className="card-header bg-transparent border-0">
										<UserGroupIcon className={`${styles.icon2} axel-text-orange`}/>
									</div>
									<div className="card-body">
										<h5 className="card-title">Membres</h5>
										<p className="card-text">Une association peut être constituée d'un nombre variable de membres, allant d'une seule personne (dans le cas d'une SARLU) à plusieurs centaines.</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card h-100 text-center">
									<div className="card-header bg-transparent border-0">
										<BookOpenIcon className={`${styles.icon2} axel-text-orange`}/>
									</div>
									<div className="card-body">
										<h5 className="card-title">Statuts </h5>
										<p className="card-text">Les règles de fonctionnement, les droits et obligations des membres, ainsi que les modalités de prise de décision sont définis dans les statuts.</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card h-100 text-center">
									<div className="card-header bg-transparent border-0">
										<ScaleIcon className={`${styles.icon2} axel-text-orange`}/>
									</div>
									<div className="card-body">
										<h5 className="card-title">Personnalité juridique </h5>
										<p className="card-text">Une fois déclarée, une association acquiert une personnalité juridique, ce qui lui permet d'agir en son propre nom, de signer des contrats et de posséder des biens.</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card h-100 text-center">
									<div className="card-header bg-transparent border-0">
										<HomeIcon className={`${styles.icon2} axel-text-orange`}/>
									</div>
									<div className="card-body">
										<h5 className="card-title"> Organisation interne </h5>
										<p className="card-text">Une association est généralement dirigée par un ou plusieurs dirigeants (président, trésorier, secrétaire, etc.) élus par les membres lors d'assemblées générales.</p>
									</div>
								</div>
							</div>
						</div>
						<h2 className="text-white fs-4 text-center mt-3 py-4 fw-bold">DOSSIER A FOURNIR</h2>
						<div className="row row-cols-1 row-cols-md-3 g-5 justify-content-center">
							<div className="col">
								<div className="card h-100">
									<div className="card-header bg-transparent border-0">
										<HomeIcon className={`${styles.icon2} axel-text-orange`}/>
									</div>
									<div className="card-body">
										<h5 className="card-title"> Pour chaque membre </h5>
										<p className="card-text">
											- 02 CIN certifiés <br></br>
											- 02 certificats de résidence
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
										<h5 className="card-title"> Pour le président ou représentant </h5>
										<p className="card-text">
											- 03 CIN certifiés<br></br>
											- 03 certificats de résidence
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
										<h5 className="card-title"> Pour le siège social  </h5>
										<p className="card-text">
											- 02 certificats d’existence délivrés par Fokontany du siège<br></br>
											- 02 plans de repérage visés par Fokontany<br></br>
											- 01 photocopie facture JIRAMA moins de trois (3) mois<br></br>
											- 01 photocopie CIN du propriétaire du siège
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="d-flex flex-column justify-content-center">
								<h2 className="text-white fs-4 text-center mt-3 py-4 fw-bold">PRESTATION Axcel Company</h2>
							<div className="align-self-center">
								<ul className='text-white fw-bolder fs-5'>
									<li>Prestation : 400 000 Ar</li>
									<li>Frais administratifs : environ 140 000 Ar</li>
									<ul>
										<li>
											TOTAL : à partir de 540 000 Ar
										</li>
										<li>
											Durée de traitement : environ deux (2) semaines
										</li>
									</ul>
								</ul>
								<p className={'text-white fs-5'}>TARIFS POUR LES ÉTRANGERS</p>
								<ul className='text-white fw-bolder fs-5'>
									<li>Prestation : 80 EUROS</li>
									<li>Frais administratifs : environ 28 EUROS</li>
									<ul>
										<li>
											TOTAL : 108 EUROS
										</li>
									</ul>
								</ul>
							</div>

						</div>

						<div className="text-center py-5">
							<a href="/devis" className="btn axel-btn-orange text-white">Demande de devis</a>
						</div>
					</div>
				</div>
			</div>
			<OfferDeals />
			<div className="container">
				<div className="container py-5">
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