
import styles from '@/app/(pages)/page.module.css'
import { CheckCircleIcon,HomeIcon,UserGroupIcon,BuildingOfficeIcon,BuildingOffice2Icon,BuildingLibraryIcon } from '@heroicons/react/20/solid';
import PageHero from '@/app/components/pageHero/pageHero'
import OtherService from '@/app/components/other-service/otherServics';
import React from "react";
import Counter from '@/app/components/counter/counter';
import OfferDeals from "@/app/components/offerDeals/OfferDeals";
export const metadata = {
  title: "Création d'un SA / SAU - Axcel Company",  
}

export default function Page() {
    
  return (
    <>
      <PageHero 
                imgSrc="/hands-image.jpg" 
                desc="En plus du conseil et de l'assistance administrative, nous proposons une gamme de services complets pour répondre aux besoins variés de nos clients en matière de gestion d'entreprise à Madagascar." 
                btnText="Rentrons en contact"
        />    
      

      <div className="container-fluid bg-primary pt-5 px-0">
        <div className={`${styles.bg} p-0 m-0`}>
          <div className='container py-5'>
            <div className="row d-flex justify-content-center py-5">
                <div className="col d-none d-lg-block"></div>
                <div className="col col-lg-8 d-flex  flex-column justify-content-center align-items-center">
                    <h5 className="card-title f-bold fs-3 axel-text-orange py-3">Services</h5>
                    <h2 className="text-white fs-2 fw-bolder text-center">Création d'un SA / SAU</h2>
                    <p className='text-white text-center'>La création d’une Société Anonyme (SA) ou d’une Société Anonyme Unipersonnelle (SAU) est adaptée aux entreprises de grande envergure ou nécessitant des investissements importants. </p>
                    <div className="border border-info border-2 w-25 my-3"></div>
                    
                </div>
                <div className="col d-none d-lg-block"></div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-5">
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <HomeIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Société Anonyme (SA)</h3>
                    <p className="card-text">C'est une forme de société qui est couramment choisie pour les grandes entreprises.</p>
                    <h5 className="axel-text-orange mt-2">Document à fournir :</h5>
                      <p className="card-text">- Formulaire de demande d'immatriculation<br></br>
                      - Statuts de la société<br></br>
                      - Procès-verbal de l’assemblée constitutive<br></br>
                      - Justificatif de domicile du siège social<br></br>
                      - Pièces d'identité des actionnaires et dirigeants<br></br>
                      - Justificatifs des apports en numéraire<br></br>
                      - Rapport sur les apports en nature<br></br>
                      - Preuve de l'adresse fiscale<br></br>
                          - Paiement des frais d'enregistrement</p>
                  </div>
                  
                 </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <HomeIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                    <div className="card-body">
                      <h3 className="card-title">Société Anonyme Unipersonnelle (SAU)</h3>
                      <p className="card-text">
                      Variante de la SA, avec un associé unique.<br></br>
                      Garde les mêmes règles que la SA pour la gestion, mais simplifie certains processus (moins de rapports collectifs).
                      </p>                   
                    </div>                  
                 </div>
              </div>                                       
            </div>
              <div className={'text-white'}>
                  <p className="text-white mt-4">
                      <strong>PRESTATION AXCEL COMPANY :</strong>
                  </p>
                  <ul className="unstyled ps-4">
                      <li> 800.000 Ar hors frais administratifs</li>
                      <li>160 Euros pour les étrangers</li>
                  </ul>
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