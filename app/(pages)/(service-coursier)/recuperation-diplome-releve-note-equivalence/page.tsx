
import styles from '@/app/(pages)/page.module.css'
import { CheckCircleIcon,HomeIcon,UserGroupIcon,BuildingOfficeIcon,BuildingOffice2Icon,BuildingLibraryIcon } from '@heroicons/react/20/solid';
import PageHero from '@/app/components/pageHero/pageHero'
import OtherService from '@/app/components/other-service/otherServics';
import React from "react";

import Counter from '@/app/components/counter/counter';
import OfferDeals from "@/app/components/offerDeals/OfferDeals";
export const metadata = {
  title: 'Récupération diplôme, relevé de note, équivalence.. - Axcel Company',  
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
                    <h2 className="text-white fs-2 fw-bolder text-center">RECUPERATION DIPLOME</h2>
                  <p className="text-center text-white">Axcel Company vous accompagne dans la récupération de vos diplômes, relevés de notes et l’obtention d’équivalences académiques, en vous offrant un service rapide, sécurisé et en fonction de vos besoins.</p>
                    <div className="border border-info border-2 w-25 my-3"></div>
                    
                </div>
                <div className="col d-none d-lg-block"></div>
            </div>
            <div className='row row-cols-1 row-cols-md-2 g-5'>
              <div className='col'>
                <div className="card h-100 border-0 rounded-0">
                  <div className="card-header border-0 p-0 bg-info rounded-0 rounded-0 rounded-0">
                    <h3 className="card-title fs-5 text-center my-2 text-white">BACCALAUREAT ANTANANARIVO</h3>
                  </div>
                  <div className="card-body border border-1 border-top-0 p-0">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">• <span className='axel-text-orange fw-bold'>Dossier à fournir pour 1960 à 1992</span>
                        <p className='py-3'>- 01 attestation originale<br></br>
                          - Ou relevé de note certifiée + déclaration de perte de l’attestation originale <br></br>
                          - 01 photocopie CIN <br></br>
                          - 01 procuration légalisée</p>
                      </li>
                      <li className="list-group-item">• <span className='axel-text-orange fw-bold py-2'>Dossier à fournir pour 1993 à 2006</span><br></br>
                        <p className='py-3'>- 01 attestation originale <br></br>
                          - 01 relevé de notes originale<br></br>
                          - Ou relevé de note original + déclaration de perte de l’attestation originale<br></br>
                          - 01 procuration légalisée</p>
                      </li>
                      <li className="list-group-item">• <span className='axel-text-orange fw-bold'>Dossier à fournir pour 2007 à 2024</span><br></br>
                        <p className='py-3'>- 01 relevé de notes originale<br></br>
                          - 01 photocopie CIN<br></br>
                          - 01 acte de naissance si moins de 18 ans <br></br>
                          - 01 procuration légalisée</p>
                      </li>
                      <li className="list-group-item"><span className='axel-text-blue fw-bold'>TARIFS Axcel Company</span>
                        <ul>
                          <li>Prestation : 200 000Ar
                          </li>
                          <li>Droit : 30 000Ar</li>
                        </ul>
                      </li>
                      <p className='list-group-item'>NB : Documents livrables : Diplôme Baccalauréat<br></br>
                        Le modèle de procuration est disponible sur WhatsApp et sur email
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className="card h-100 border-0 rounded-0 pb-2">
                  <div className="card-header border-0 p-0 bg-info rounded-0 rounded-0">
                    <h3 className="card-title fs-5 text-center my-2 text-white">DIPLOME D’ETUDE SUPERIEUR</h3>
                  </div>
                  <div className="card-body border border-1 border-top-0 border-bottom-0 p-0">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item text-white text-center fw-bold axel-bg-orange py-1">DTS</li>
                      <li className="list-group-item">
                        •	<span className='axel-text-orange fw-bold'>Dossier à fournir</span><br></br>
                        - 01 photocopie CIN certifiée <br></br>
                        - 01 relevé de notes original <br></br>
                        - 01 attestation de réussite<br></br>
                        - 01 procuration légalisée
                      </li>
                      <li className="list-group-item text-white text-center fw-bold axel-bg-orange py-1">LICENCE</li>
                      <li className="list-group-item">
                        •	<span className='axel-text-orange fw-bold'>Dossier à fournir</span><br></br>
                        - 01 photocopie CIN certifiée <br></br>
                        - 01 relevé de notes original <br></br>
                        - 01 attestation de réussite<br></br>
                        - 01 procuration légalisée
                      </li>
                      <li className="list-group-item text-white text-center fw-bold axel-bg-orange py-1">MASTER</li>
                      <li className="list-group-item">
                        •	<span className='axel-text-orange fw-bold'>Dossier à fournir</span><br></br>
                        - 01 photocopie CIN certifiée <br></br>
                        - 01 relevé de notes original <br></br>
                        - 01 attestation de réussite<br></br>
                        - 01 procuration légalisée

                      </li>
                      <li className="list-group-item"><span className='fw-bold axel-text-blue'>TARIFS Axcel Company</span>
                        <ul>
                          <li>DTS : 200 000 Ar</li>
                          <li>LICENCE : 200 000 Ar</li>
                          <li>MASTER : 200 000 Ar</li>
                        </ul>
                      </li>
                      <p className='list-group-item'>NB : Ces documents constituent les références de base, toutefois, les documents spécifiques peuvent varier en fonction de chaque établissement ou université.
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center py-5">
                <div className="col d-none d-lg-block"></div>
                <div className="col col-lg-8 d-flex  flex-column justify-content-center align-items-center">
                    
                    <h2 className="text-white fs-2 fw-bolder text-center">Coursier professionnelle</h2>
                    <div className="border border-info border-2 w-25 my-3"></div>
                    
                </div>
                <div className="col d-none d-lg-block"></div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-5">
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <HomeIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Récupération et livraison de documents</h3>
                    <p className="card-text">Certificat de : résidence, existence, ...<br></br>
                      Extrait RCS, Attestation de non – faillite<br></br>
                      Acte de : naissance, mariage, ...<br></br>
                      Certificat de consommabilité<br></br>
                      Diplôme, Attestation de réussite
                    </p>                    
                  </div>

                 </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <BuildingOfficeIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Dépôt de documents administratifs</h3>
                    <p className="card-text">Dépôts et récupération des déclarations fiscales, sociales,<br></br>
                    Dépôts des candidatures pour des concours administratifs</p>                    
                  </div>

                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <BuildingOfficeIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Autres services</h3>
                    <p className="card-text">Toutes certifications et enregistrements dans des bureaux d’Etat<br></br>
                      Traductions des actes : naissance, mariage, ...<br></br>
                      Traduction livret de famille<br></br>
                      Elaboration du curriculum vitae (CV)<br></br>
                      Certification Diplôme, équivalence<br></br>
                    </p>                    
                  </div>

                </div>
              </div>
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