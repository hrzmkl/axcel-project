
import styles from '@/app/(pages)/page.module.css'
import { CheckCircleIcon,HomeIcon,UserGroupIcon,BuildingOfficeIcon,BuildingOffice2Icon,BuildingLibraryIcon } from '@heroicons/react/20/solid';
import PageHero from '@/app/components/pageHero/pageHero'
import OtherService from '@/app/components/other-service/otherServics';
import React from "react";
import Counter from '@/app/components/counter/counter';
export const metadata = {
  title: "Création d'un SARL / SARLU - Axcel Company",  
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
      <div className="container-fluid bg-primary px-0">
        <div className={`${styles.bg} p-0 m-0`}>
          <div className='container py-5'>
            <div className="row d-flex justify-content-center py-5">
                <div className="col d-none d-lg-block"></div>
                <div className="col col-lg-8 d-flex  flex-column justify-content-center align-items-center">
                    <h5 className="card-title f-bold fs-3 axel-text-orange py-3">Services</h5>
                    <h2 className="text-white fs-2 fw-bolder text-center">Création sarl / Sarlu</h2>
                    <p className='text-white text-center'>La création d’une SARL (Société à Responsabilité Limitée) et d’une SARL Unipersonnelle (SARLU) suit des étapes similaires, bien que la principale différence réside dans le nombre d’associés</p>
                    
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
                    <h3 className="card-title axel-text-orange">SARL (Société à Responsabilité Limitée)</h3>
                    <p>
                    Nombre d’associés : Minimum 2, maximum 100.<br></br>
                    Capital social : Fixé librement (minimum 1 €).<br></br>
                    Gestion : Par un ou plusieurs gérants, qui peuvent être des associés ou des tiers.<br></br>
                    Formalités : L’ensemble des démarches administratives est relativement standard, mais nécessite plus de gestion formelle (assemblées générales, procès-verbaux, etc.).
                    </p> 
                    <p className="pt-2">
                      Adaptée aux entrepreneurs qui souhaitent se regrouper tout en protégeant leur patrimoine personnel. Elle offre une flexibilité dans la gestion et une responsabilité limitée des associés, ce qui en fait une option prisée pour les projets collaboratifs.
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
                      <h3 className="card-title axel-text-orange">SARLU (Société à Responsabilité Limitée Unipersonnelle)</h3>
                      <p className="card-text">
                      Nombre d’associés : 1 seul associé unique.<br></br>
                      Capital social : Librement fixé (minimum 1 €).<br></br>
                      Gestion : La gestion est confiée à un seul gérant, qui peut être l’associé unique lui-même.<br></br>
                      Formalités : Moins de formalisme que pour une SARL classique, mais les démarches sont assez similaires. L'associé unique peut également rédiger les statuts et gérer l'entreprise seul.
                      </p>
                      <p className='pt-2'>Une option idéale pour un entrepreneur individuel souhaitant limiter sa responsabilité tout en ayant une structure juridique plus formelle que l'entreprise individuelle.</p>                  
                    </div>                  
                 </div>
              </div>                                 
            
              <div className="col">
                <div className="card h-100">                  
                  <div className="card-body">
                    <h3 className="card-title axel-text-orange">Prestation Axcel Company :</h3>
                    <p className="card-text pt-2">
                      Honoraire : 400.000 Ar<br></br>
                      Frais administratifs fixes : 130 000 Ar<br></br>
                      Impôt : à partir de 150 000 Ar <br></br>
                      Droit d’enregistrement bail : loyer x durée du bail x 2%
                    </p>                   
                  </div>                  
                 </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                      <h3 className="card-title axel-text-orange">Dossier à fournir : </h3>
                      <ul>
                        <li>
                          Pour les associés :
                          <ul>
                            <li>01 photocopie CIN </li>
                            <li>01 certificat de résidence</li> 
                            <li>03 procurations </li>                           
                          </ul>
                        </li>
                      </ul>
                      <ul>
                        <li>
                        Pour le siège : 
                          <ul>
                            <li>02 plans de repérage visés par Fokotany </li>
                            <li>01 copie facture JIRAMA (moins de 3 mois)</li>
                            <li>01 copie CIN du bailleur (si personne physique) ou copie carte fiscale non expirée (si société) </li>
                          </ul>
                        </li>
                      </ul>                                      
                    </div>                  
                 </div>
              </div>                                       
            </div>
            <div className='container w-75 mt-5'>
              <h4 className='text-white'>NB :</h4>
                <ul className='text-white'>
                  <li>Le modèle de lettre de demande ainsi que la procuration sont disponibles sur WhatsApp ou E-mail.</li>
                  <li>Il s'agit des documents généraux, toutefois, le dossier requis peut varier en fonction des activités exercées et du lieu d'implantation de votre société.</li>
                  <li>Document livrable : carte fiscale (NIF) / carte statistique (STAT).</li>
                </ul>
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