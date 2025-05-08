import styles from '@/app/(pages)/page.module.css'
import { BuildingLibraryIcon,HomeIcon,BuildingOfficeIcon,CheckCircleIcon } from '@heroicons/react/20/solid';
import OtherService from '@/app/components/other-service/otherServics';
import React from "react";
import Counter from '@/app/components/counter/counter';
import { CardSectionEI,CardSectionFraisAdmins } from "@/app/components/CardSection/CardSection";
import OfferDeals from "@/app/components/offerDeals/OfferDeals";
export const metadata = {
    title: "Création d'une entreprise individuelle - Axcel Company",
}

export default function Page() {

    return (
        <>

            <div className={`${styles.hero} container py-5`}>
                <div className="row d-flex justify-content-center py-5">
                    <div className="col d-none d-lg-block"></div>
                    <div className="col col-lg-8 d-flex  flex-column justify-content-center align-items-center">
                        <h2 className="card-title f-bold fs-3 text-white py-3">NOS PACKS CREATION</h2>
                        <div className="border border-info border-2 w-25 my-3"></div>
                    </div>
                    <div className="col d-none d-lg-block"></div>
                </div>
				<div className="row row-cols-1 row-cols-md-3 g-5 px-5 pb-5">
					<div className="col">
						<div className="card h-100">
							<div className="card-header bg-transparent p-0 border-0 text-center pt-3">
                                <HomeIcon className={`${styles.icon2} axel-text-orange icon3`} />
								<h2 className="text-center text-info fw-bold fs-3 p-3">PACK « NY ANTSIKA »</h2>
								<h3 className="card-title text-center axel-bg-orange p-4">NIF – STAT</h3>
							</div>
							<div className="card-body">
								<h5>TARIFS : 200 000 Ar </h5>
								<p>Hors frais administratif</p>
								<ul>
									<li>Fiable</li>
									<li>Rapide</li>
									<li>Sans déplacement</li>
									<li>Durée de traitement : 3 jours ouvrables</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="card-header bg-transparent p-0 border-0 text-center pt-3">
                                <BuildingLibraryIcon className={`${styles.icon2} axel-text-orange icon3`} />
								<h2 className="text-center text-info fw-bold fs-3 p-3">PACK « TAFARAY »</h2>
								<h3 className="card-title text-center axel-bg-orange p-4">NIF – STAT – RCS</h3>
							</div>
							<div className="card-body">
								<h5>TARIFS : 240 000 Ar </h5>
								<p>Hors frais administratif</p>
								<ul><li>Fiable</li><li>Rapide</li>
									<li>Sans déplacement</li>
									<li>Durée de traitement : 3 jours ouvrables</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="card-header bg-transparent p-0 border-0 text-center pt-3">
                                <BuildingOfficeIcon className={`${styles.icon2} axel-text-orange icon3`} />
								<h2 className="text-center text-info fw-bold fs-3 p-3">PACK « JIABY JIABY »</h2>
								<h3 className="card-title text-center axel-bg-orange p-4">NIF – STAT – RCS + Préparation des documents de base</h3>
							</div>
							<div className="card-body">
								<h5>TARIFS : 1 000 000 Ar </h5>
								<p>Hors frais administratif</p>
								<ul>
									<li>Renouvellement carte fiscale compris</li>
									<li>Rajout d’activité compris</li>
									<li>Rapide</li>
									<li>Sans déplacement</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
            </div>

            <div className="container-fluid bg-primary px-0">
                <div className={`${styles.bg} p-0 m-0`}>
                    <div className='container py-5'>
                        <div className="row d-flex justify-content-center py-5">
                            <div className="col d-none d-lg-block"></div>
                            <div className="col col-lg-8 d-flex  flex-column justify-content-center align-items-center">
                                <h5 className="card-title f-bold fs-3 axel-text-orange py-3">Services</h5>
                                <h2 className="text-white fs-2 fw-bolder text-center">Création entreprise individuelle</h2>
                                <p className='text-white text-center'>L'entreprise individuelle est une option simple et flexible pour les entrepreneurs souhaitant exercer seuls.</p>
                                <ul className='text-white pt-3 unstyled text-center'>
                                    <li><strong>Nombre d’associés :</strong> Un seul entrepreneur.</li>
                                    <li><strong>Capital social : </strong> Aucun minimum requis, le capital peut être librement déterminé.</li>
                                    <li><strong>Gestion :</strong> Gérée directement par l'entrepreneur, sans obligation de gérance formelle.</li>
                                    <li><strong>Formalités : </strong> Les démarches administratives sont simplifiées, avec moins d'exigences formelles (pas d'assemblées générales ni de procès-verbaux nécessaires).</li>
                                </ul>
                                <div className="border border-info border-2 w-25 my-3"></div>
                            </div>
                            <div className="col d-none d-lg-block"></div>
                        </div>
                        <CardSectionEI />
                        <div className="text-center py-5">
                            <a href="/devis" className="btn axel-btn-orange text-white">Demande de devis</a>
                            <p className="text-white mt-3">
                                PRESTATION POUR LES ETRANGERS : 120 Euros.
                            </p>
                        </div>
                        <div className='row d-flex justify-content-center py-5'>
                            <div className="col d-none d-lg-block"></div>
                            <div className="col col-lg-8 d-flex  flex-column justify-content-center align-items-center">
                                <h2 className='text-white fs-2 fw-bolder text-center'>Frais Administratifs :</h2>
                                <p className='text-center text-white'>Pour l'établissement des devis et la préparation des documents requis, il est indispensable de connaître l'activité, le lieu de résidence ainsi que l'emplacement de l'exploitation.</p>
                                <p className='text-center text-white'>Ces informations sont cruciales pour la création d'une entreprise individuelle.</p>
                                <div className="border border-info border-2 w-25 mt-4 mb-2"></div>
                            </div>
                            <div className="col d-none d-lg-block "></div>
                        </div>
                        <CardSectionFraisAdmins/>
                        <div className="row row-cols-1 row-cols-md-3 g-5 mt-2">
                            <div className="col">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title axel-text-orange py-2">Tana 4ème arrondissement </h3>
                                        <ul>
                                            <li><span className="text-info">Prestation Axcel Company</span><br></br>
                                                - Honoraire : 200 000 Ar / 40 EUROS<br></br>
                                                - Frais administratifs fixes : 140 000 Ar / 28 EUROS<br></br>
                                                - Impôt : 150 000 Ar
                                            </li>
                                            <ul>
                                                <li>
                                                    <strong>TOTAL BUDGET</strong> : 490 000 Ar si impôt 150 000 Ar
                                                </li>
                                                <li>
                                                    <span className="text-info"><strong>Durée de traitement du dossier </strong></span> : 3 jours ouvrables
                                                </li>
                                            </ul>
                                            <li><span className="text-info">Dossier à fournir</span><br></br>
                                                - 3 CIN certifiés<br></br>
                                                - 3 certificats de résidence<br></br>
                                                - 2 plans de repérage visés par Fokotany<br></br>
                                                - 3 procurations légalisées<br></br>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title axel-text-orange py-2">Tana 5ème arrondissement </h3>
                                        <ul>
                                            <li><span className="text-info">Prestation Axcel Company</span><br></br>
                                                - Honoraire : 200 000 Ar / 40 EUROS<br></br>
                                                - Frais administratifs fixes : 140 000 Ar / 28 EUROS<br></br>
                                                - Impôt : à partir de 150 000 Ar à 320 000 Ar / 52 EUROS selon vos activités
                                            </li>
                                            <ul>
                                                <li>
                                                    <strong>TOTAL BUDGET</strong> : 490 000 Ar à 660 000 Ar
                                                </li>
                                                <li>
                                                    <span className="text-info"><strong>Durée de traitement du dossier </strong></span> : 3 jours ouvrables
                                                </li>
                                            </ul>
                                            <li><span className="text-info">Dossier à fournir</span><br></br>
                                                - 3 CIN certifiés<br></br>
                                                - 3 certificats de résidence<br></br>
                                                - 2 plans de repérage visés par Fokotany<br></br>
                                                - 3 procurations légalisées<br></br>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title axel-text-orange py-2">Tana 6ème arrondissement </h3>
                                        <ul>
                                            <li><span className="text-info">Prestation Axcel Company</span><br></br>
                                                - Honoraire : 200 000 Ar / 40 EUROS<br></br>
                                                - Frais administratifs fixes : 140 000 Ar / 28 EUROS<br></br>
                                                - Impôt : à partir de 150 000 Ar à 320 000 Ar / 52 EUROS selon vos activités
                                            </li>
                                            <ul>
                                                <li>
                                                    <strong>TOTAL BUDGET</strong> : 490 000 Ar à 660 000 Ar
                                                </li>
                                                <li>
                                                    <span className="text-info"><strong>Durée de traitement du dossier </strong></span> : 3 jours ouvrables
                                                </li>
                                            </ul>
                                            <li><span className="text-info">Dossier à fournir</span><br></br>
                                                - 3 CIN certifiés<br></br>
                                                - 3 certificats de résidence<br></br>
                                                - 2 plans de repérage visés par Fokotany<br></br>
                                                - 3 procurations légalisées<br></br>
                                                - 4 contrats de bail originaux légalisées si locataire<br></br>
                                                - Copie rôle hetra-trano (impôt foncier)<br></br>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title axel-text-orange py-2">Tana Avaradrano</h3>
                                        <ul>
                                            <li><span className="text-info">Prestation Axcel Company</span><br></br>
                                                - Honoraire : 200 000 Ar / 40 EUROS<br></br>
                                                - Frais administratifs fixes : 140 000 Ar / 28 EUROS<br></br>
                                                - Impôt : à partir de 150 000 Ar à 320 000 Ar / 52 EUROS selon vos activités
                                            </li>
                                            <ul>
                                                <li>
                                                    <strong>TOTAL BUDGET</strong> : 490 000 Ar à 660 000 Ar
                                                </li>
                                                <li>
                                                    <span className="text-info"><strong>Durée de traitement du dossier </strong></span> : 3 jours ouvrables
                                                </li>
                                            </ul>
                                            <li><span className="text-info">Dossier à fournir</span><br></br>
                                                - 3 CIN certifiés<br></br>
                                                - 3 certificats de résidence<br></br>
                                                - 2 plans de repérage visés par Fokotany<br></br>
                                                - 3 procurations légalisées<br></br>
                                                - 4 contrats de bail originaux légalisées si locataire<br></br>
                                                - Copie rôle hetra-trano (impôt foncier)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title axel-text-orange py-2">Andoharanofotsy</h3>
                                        <ul>
                                            <li><span className="text-info">Prestation Axcel Company</span><br></br>
                                                - Honoraire : 200 000 Ar / 40 EUROS<br></br>
                                                - Frais administratifs fixes : 140 000 Ar / 28 EUROS<br></br>
                                                - Impôt : 150 000 Ar
                                            </li>
                                            <ul>
                                                <li>
                                                    <strong>TOTAL BUDGET</strong> : 490 000 Ar
                                                </li>
                                                <li>
                                                    <span className="text-info"><strong>Durée de traitement du dossier </strong></span> : 3 jours ouvrables
                                                </li>
                                            </ul>
                                            <li><span className="text-info">Dossier à fournir</span><br></br>
                                                - 3 CIN certifiés<br></br>
                                                - 3 certificats de résidence<br></br>
                                                - 2 plans de repérage visés par Fokotany<br></br>
                                                - 2 lettres de demande<br></br>
                                                - 3 procurations légalisées<br></br>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title axel-text-orange py-2">Itaosy </h3>
                                        <ul>
                                            <li><span className="text-info">Prestation Axcel Company</span><br></br>
                                                - Honoraire : 200 000 Ar / 40 EUROS<br></br>
                                                - Frais administratifs fixes : 140 000 Ar / 28 EUROS<br></br>
                                                - Impôt : à partir de 150 000 Ar à 320 000 Ar / 52 EUROS selon vos activités
                                            </li>
                                            <ul>
                                                <li>
                                                    <strong>TOTAL BUDGET</strong> : 490 000 Ar à 660 000 Ar
                                                </li>
                                                <li>
                                                    <span className="text-info"><strong>Durée de traitement du dossier </strong></span> : 3 jours ouvrables
                                                </li>
                                            </ul>
                                            <li><span className="text-info">Dossier à fournir</span><br></br>
                                                - 3 CIN certifiés<br></br>
                                                - 3 certificats de résidence<br></br>
                                                - 2 plans de repérage visés par Fokotany<br></br>
                                                - 2 lettres de demande<br></br>
                                                - 3 procurations légalisées<br></br>
                                                - 4 contrats de bail originaux légalisées si locataire<br></br>
                                                - Copie rôle hetra-trano (impôt foncier)<br></br>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title axel-text-orange py-2">Alasora</h3>
                                        <ul>
                                            <li><span className="text-info">Prestation Axcel Company</span><br></br>
                                                - Honoraire : 200 000 Ar / 40 EUROS<br></br>
                                                - Frais administratifs fixes : 140 000 Ar / 28 EUROS<br></br>
                                                - Impôt : à partir de 150 000 Ar selon vos activités
                                            </li>
                                            <ul>
                                                <li>
                                                    <strong>TOTAL BUDGET</strong> : 490 000 Ar si impôt 150 000 Ar
                                                </li>
                                                <li>
                                                    <span className="text-info"><strong>Durée de traitement du dossier </strong></span> : 3 jours ouvrables
                                                </li>
                                            </ul>
                                            <li><span className="text-info">Dossier à fournir</span><br></br>
                                                - 3 CIN certifiés<br></br>
                                                - 3 certificats de résidence<br></br>
                                                - 2 plans de repérage visés par Fokotany<br></br>
                                                - 3 procurations légalisées<br></br>
                                                - 2 lettres de demande<br></br>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title axel-text-orange py-2">Ambohimangakely </h3>
                                        <ul>
                                            <li><span className="text-info">Prestation Axcel Company</span><br></br>
                                                - Honoraire : 200 000 Ar / 40 EUROS<br></br>
                                                - Frais administratifs fixes : 140 000 Ar / 28 EUROS<br></br>
                                                - Impôt : à partir de 150 000 Ar selon vos activités
                                            </li>
                                            <ul>
                                                <li>
                                                    <strong>TOTAL BUDGET</strong> : 490 000 Ar si impôt 150 000 Ar
                                                </li>
                                                <li>
                                                    <span className="text-info"><strong>Durée de traitement du dossier </strong></span> : 3 jours ouvrables
                                                </li>
                                            </ul>
                                            <li><span className="text-info">Dossier à fournir</span><br></br>
                                                - 3 CIN certifiés<br></br>
                                                - 3 certificats de résidence<br></br>
                                                - 2 plans de repérage visés par Fokotany<br></br>
                                                - 3 procurations légalisées<br></br>
                                                - 2 lettres de demande
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div className="col">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title axel-text-orange py-2">Ivato</h3>
                                        <ul>
                                            <li><span className="text-info">Prestation Axcel Company</span><br></br>
                                                - Honoraire : 200 000 Ar / 40 EUROS<br></br>
                                                - Frais administratifs fixes : 140 000 Ar / 28 EUROS<br></br>
                                                - Impôt : 150 000 Ar
                                            </li>
                                            <ul>
                                                <li>
                                                    <strong>TOTAL BUDGET</strong> : 490 000 Ar
                                                </li>
                                                <li>
                                                    <span className="text-info"><strong>Durée de traitement du dossier </strong></span> : 3 jours ouvrables
                                                </li>
                                            </ul>
                                            <li><span className="text-info">Dossier à fournir</span><br></br>
                                                - 3 CIN certifiés<br></br>
                                                - 3 certificats de résidence<br></br>
                                                - 2 plans de repérage visés par Fokotany<br></br>
                                                - 3 procurations légalisées<br></br>
                                                - 2 lettres de demande
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>                           
                    </div>
                    <div className='container w-75 pb-5'>
                        <h4 className='text-white'>NB :</h4>
                        <ul className='text-white'>
                            <li>Le modèle de lettre de demande ainsi que la procuration sont disponibles sur WhatsApp ou E-mail </li>
                            <li>Document livrable : carte fiscale (NIF) / carte statistique (STAT)</li>
                        </ul>
                    </div>
                </div>

            </div>
            <OfferDeals />
            <div className="container">
                <div className="container mb-lg-5 pb-5">
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