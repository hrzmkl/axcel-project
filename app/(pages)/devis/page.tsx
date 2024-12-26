
import styles from '../page.module.css'
import { CheckCircleIcon,HomeIcon,UserGroupIcon,BuildingOfficeIcon,BuildingOffice2Icon,BuildingLibraryIcon } from '@heroicons/react/20/solid';

import Link from 'next/link'
import React from "react";

import Counter from '@/app/components/counter/counter';
export const metadata = {
  title: 'Devis - Axcel company',  
}

export default function Page() {
    
  return (
    <>
      <div className={`${styles.hero} container-fluid py-5`}>
              <div className="container my-lg-5 py-5">
                    <div className="row justify-content-around px-3 align-items-center">   
                      <div className="col-sm-12 col-lg-6 py-5 ps-lg-5 axel-block1">
                                <div className="border-2 border-dark">
                                    <div>
                                        <img src="/hands-image.jpg" alt="prise en main" className={`${styles.image} img-fluid`}/>
                                    </div>                                    
                                </div>                                                     
                        </div>                     
                        <div className="col-sm-12 col-lg-6 p-auto pe-lg-5">
                            <div className="d-flex flex-column mb-3">
                                <h3 className="axel-text-orange fs-3 fw-bolder"><Link href="/" className="text-white">Accueil</Link> >>> <span>Devis</span></h3>                            
                                <h1 className="text-white fw-bolder pt-3">Devis</h1>
                                <div className="border border-info border-2 w-25 my-3"></div>   
                                <p className='text-white py-3'>En plus du conseil et de l'assistance administrative, nous proposons une gamme de services complets pour répondre aux besoins variés de nos clients en matière de gestion d'entreprise à Madagascar.</p>                        
                                                   
                            </div>   
                            <div className='d-block py-4 py-lg-4'>
                                <a href="/contact" type="button" className="btn btn-info text-white">Rentrons en contact</a>
                            </div>                          
                        </div>                                           
                        
                    </div>
            </div>
      </div>     
      
      <div className="container-fluid py-5 px-0">
        <div className="p-0 m-0">
          <div className='container py-5'>
            <div className="row d-flex justify-content-center py-5">
                <div className="col d-none d-lg-block"></div>
                <div className="col col-lg-8 d-flex  flex-column justify-content-center align-items-center">
                    <h5 className="card-title f-bold fs-3 axel-text-orange py-3">Plan et tarifs</h5>
                    <h2 className="axel-text-blue fs-2 fw-bolder text-center">Création d'entreprise, Association et ONG</h2>
                    <div className="border border-info border-2 w-25 my-3"></div>
                    <p className='py-3'>Axcel Company est une société dédiée à fournir des services professionnels aux entreprises. Nous accompagnons depuis 2022 les entrepreneurs, les investisseurs dans la formalisation de leurs entreprises.</p>
                   
                    
                </div>
                <div className="col d-none d-lg-block"></div>
            </div>
            
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 text-center axel-box">
                    <div className="card-header bg-transparent">
                        <h2>Entreprise Individuelle</h2>
                    </div>
                    <div className="card-body px-0">                    
                            <h5 className="card-title px-3"><sup className='fs-5 fw-bolder'>Ar</sup> 490 000 à 660 000</h5>
                            <p className='px-3'><small>(Selon de votre activité)</small></p>
                            <div className="border border-secondary-subtle border-top-0 border-bottom-1 w-100 my-3"></div>
                        <p className="card-text px-3">Prestation : 200 000Ar. <br></br>
                        Frais administratifs fixe 140 000Ar,<br></br>
                        Impôt Intervalle de : 150 000Ar à 320 000Ar
                        </p>                    
                    </div>
                    <div className="card-footer bg-transparent py-3"><a href="#" className="card-link btn btn-info text-white fw-bold">Acheter ce plan</a></div>
                    </div>
                </div> 
                <div className="col">
                    <div className="card h-100 axel-box text-center">
                    <div className="card-header bg-transparent">
                        <h2>SARL ou SARLU</h2>
                    </div>
                    <div className="card-body px-0">                    
                            <h5 className="card-title px-3"><sup className='fs-5 fw-bolder'>Ar</sup> 690 000 à 860 000</h5>
                            <p className='px-3'><small>(Selon de votre activité et Situation spécifique)</small></p>
                            <div className="border border-secondary-subtle border-top-0 border-bottom-1 w-100 my-3"></div>
                        <p className="card-text px-3">Prestation : 400 000Ar.<br></br>
                        Frais administratifs fixe 140 000Ar,<br></br>
                        Impôt Intervalle de : 150 000Ar à 320 000Ar
                        </p>                    
                    </div>
                    <div className="card-footer bg-transparent py-3"><a href="#" className="card-link btn btn-info text-white fw-bold">Acheter ce plan</a></div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center axel-box">
                    <div className="card-header bg-transparent">
                        <h2>Société "SA" ou "SAU"</h2>
                    </div>
                    <div className="card-body px-0">                    
                            <h5 className="card-title px-3"><sup className='fs-5 fw-bolder'>Ar</sup> 1 090 000 à 1 410 000</h5>
                            <p className='px-3'><small>(Selon de votre activité et Situation spécifique)</small></p>
                            <div className="border border-secondary-subtle border-top-0 border-bottom-1 w-100 my-3"></div>
                        <p className="card-text px-3">Prestation : 800 000Ar.<br></br>
                        Frais administratifs fixe 140 000Ar,<br></br>
                        Impôt Intervalle de : 150 000Ar à 320 000Ar
                        </p>                    
                    </div>
                    <div className="card-footer bg-transparent py-3"><a href="#" className="card-link btn btn-info text-white fw-bold">Acheter ce plan</a></div>
                    </div>
                </div> 
                <div className="col">
                    <div className="card h-100 text-center axel-box">
                    <div className="card-header bg-transparent">
                        <h2>Une Association</h2>
                    </div>
                    <div className="card-body px-0">                    
                            <h5 className="card-title px-3"><sup className='fs-5 fw-bolder'>Ar</sup> 570 000 ou plus</h5>                            
                            <div className="border border-secondary-subtle border-top-0 border-bottom-1 w-100 my-3"></div>
                        <p className="card-text px-3">Prestation : 400 000Ar,<br></br>
                        Frais administratifs fixe 170 000Ar,<br></br>
                        </p>                    
                    </div>
                    <div className="card-footer bg-transparent py-3"><a href="#" className="card-link btn btn-info text-white fw-bold">Acheter ce plan</a></div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center axel-box">
                    <div className="card-header bg-transparent">
                        <h2>Une ONG</h2>
                    </div>
                    <div className="card-body px-0">                    
                            <h5 className="card-title px-3"><sup className='fs-5 fw-bolder'>Ar</sup> 1 170 000 ou plus</h5>
                            
                            <div className="border border-secondary-subtle border-top-0 border-bottom-1 w-100 my-3"></div>
                        <p className="card-text px-3">Prestation : 1 000 000Ar,<br></br>
                        Frais administratifs fixe 170 000Ar.<br></br>
                        </p>                    
                    </div>
                    <div className="card-footer bg-transparent py-3"><a href="#" className="card-link btn btn-info text-white fw-bold">Acheter ce plan</a></div>
                    </div>
                </div>                          
            </div>
          </div>
        </div>
      </div>      
      
    </>
  );
}