
import styles from '@/app/(pages)/page.module.css'
import { CheckCircleIcon,HomeIcon,UserGroupIcon,BuildingOfficeIcon,BuildingOffice2Icon,BuildingLibraryIcon } from '@heroicons/react/20/solid';
import PageHero from '@/app/components/pageHero/pageHero'
import OtherService from '@/app/components/other-service/otherServics';
import React from "react";
import Counter from '@/app/components/counter/counter';
import OfferDeals from "@/app/components/offerDeals/OfferDeals";
export const metadata = {
  title: "Ouverture succursale / filiale - Axcel Company",  
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
                    <h2 className="text-white fs-2 fw-bolder text-center">Ouverture succursale / filiale</h2>
                    <p className='text-white text-center'>L’ouverture d’une succursale ou d’une filiale est une stratégie clé pour étendre une activité dans une nouvelle région ou un autre pays.</p>
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
                    <h3 className="card-title">Succursale</h3>
                    <p className="card-text">
                    Définition : Une extension de l’entreprise mère, juridiquement dépendante de celle-ci.<br></br>
                    Responsabilité : Les obligations et responsabilités restent entièrement à la charge de l’entreprise mère.<br></br>
                    Fiscalité : Les revenus de la succursale sont directement imposés au niveau de l’entreprise mère.<br></br>
                    <strong>Caractéristiques :</strong>
                    </p>
                    <ul>
                      <li>Pas d’autonomie juridique</li>
                      <li>Doit respecter les obligations locales (immatriculation, fiscalité).</li>
                      <li>Les décisions importantes sont prises par la maison mère.</li>
                    </ul>

                  </div>
                  
                 </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <HomeIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                    <div className="card-body">
                      <h3 className="card-title">Filiale</h3>
                      <p className="card-text">
                      Définition : Une société juridiquement indépendante, détenue majoritairement ou totalement par une autre entreprise (maison mère).<br></br>
                      Responsabilité : Limitée au capital de la filiale.<br></br>
                      Fiscalité : La filiale est imposée séparément de la maison mère.<br></br>
                      <strong>Caractéristiques :</strong>
                      </p>
                      <ul>
                        <li>Dispose de sa propre personnalité juridique.</li>
                        <li>Peut opérer de manière autonome.</li>
                        <li>Nécessite la création d’une nouvelle entité légale.</li>
                      </ul>

                    </div>                  
                 </div>
              </div>
                <div className="col">
                    <div className="card h-100">

                        <div className="card-body">
                            <h3 className="card-title axel-text-orange">Dossier à fournir :</h3>
                                <ul className="card-text">
                                    <li>Copie des statuts de la société mère en version française (avec traduction en français assermentée des autres versions)</li>
                                    <li>Photocopie situation fiscale en plus</li>
                                    <li>02 Procès-verbal</li>
                                    <li>Extrait RCS moins de 3 mois de la société mère en version française (avec traduction en français assermentée des autres versions)</li>
                                </ul>
                            <p className="card-text text-info">Prestation Axcel Company</p>
                            <ul className="card-text">
                                <li>1 500 000 Ar</li>
                            </ul>
                            <p className="card-text text-info">Tarifs pour les étrangers</p>
                            <ul className="card-text">
                                <li>A partir de 300 EUROS</li>
                            </ul>

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