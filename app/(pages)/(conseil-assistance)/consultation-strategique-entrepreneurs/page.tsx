
import styles from '@/app/(pages)/page.module.css'
import { CheckCircleIcon,HomeIcon,UserGroupIcon,BuildingOfficeIcon,BuildingOffice2Icon,BuildingLibraryIcon } from '@heroicons/react/20/solid';
import PageHero from '@/app/components/pageHero/pageHero'
import OtherService from '@/app/components/other-service/otherServics';
import Link from 'next/link'
import React from "react";
import Counter from '@/app/components/counter/counter';
import OfferDeals from "@/app/components/offerDeals/OfferDeals";
export const metadata = {
  title: "Consultation stratégique pour entrepreneurs - Axcel Company",  
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
                    <h2 className="text-white fs-2 fw-bolder text-center">Consultation stratégique entrepreneurs</h2>
                    <p className='text-white text-center'>La consultation stratégique vise à guider les entrepreneurs dans la prise de décisions clés pour optimiser leurs performances, surmonter les défis et garantir la croissance durable de leur entreprise.</p>
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
                    <h3 className="card-title">Analyse de la situation actuelle </h3>
                    <p className="card-text">
                    Évaluation du modèle économique existant.<br></br>
                    Analyse SWOT (forces, faiblesses, opportunités, menaces).<br></br>
                    Étude de marché et positionnement concurrentiel.
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
                      <h3 className="card-title">Planification opérationnelle</h3>
                      <p className="card-text">
                      Élaboration d’un plan d’action stratégique.<br></br>
                      Définition des ressources nécessaires (humaines, financières, technologiques).<br></br>
                      Mise en place de KPI (indicateurs clés de performance) pour suivre les progrès.
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
                    <h3 className="card-title">Accompagnement sur mesure</h3>
                    <p className="card-text">
                    Mentorat et coaching pour renforcer les compétences de leadership.<br></br>
                    Aide à la prise de décision pour des projets spécifiques.<br></br>
                    Suivi régulier pour ajuster la stratégie en fonction des résultats.
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