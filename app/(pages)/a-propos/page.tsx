import styles from '../page.module.css'
import PageHero from '@/app/components/pageHero/pageHero';
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid';
import Team from '@/app/components/Team/team';
export const metadata = {
  title: 'A propos - Axcel company',  
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
            <div className="col-sm-12 col-lg-6 p-auto pe-lg-5">
              <div className="d-flex flex-column mb-3">
                  <h3 className="axel-text-orange fs-3 fw-bolder">A propos de Axcel Company</h3>                            
                  <h2 className="axel-text-blue fw-bolder pt-3">Société de conseil et d'assistance</h2>
                  <div className="border border-info border-2 w-25 my-3"></div>   
                  <p className='py-3'>Axcel Company est une société dédiée à fournir des services professionnels aux entreprises. Nous accompagnons depuis 2022 les entrepreneurs, les investisseurs dans la formalisation de leurs entreprises.</p>  
                  <ul className="list-unstyled">
                    <li className='p'><ChevronDoubleRightIcon className={`${styles.icon} axel-text-blue-2 fw-bolder`} /> Nous assistons les étrangers envisageant d’investir à Madagascar.</li>
                    <li className='p'><ChevronDoubleRightIcon className={`${styles.icon} axel-text-blue-2 fw-bolder`} /> Nous proposons des services de coursiers administratifs professionnels.</li>
                    <li className='p'><ChevronDoubleRightIcon className={`${styles.icon} axel-text-blue-2 fw-bolder`} /> Nous proposons une gamme de services complets pour répondre aux besoins variés de nos clients en matière de gestion d'entreprise.</li>
                  </ul>               
              </div>   
              <div className='d-block py-4 py-lg-4'>
                  <button type="button" className="btn btn-info text-white">En savoir plus</button>
              </div>                          
            </div>
            <div className="col-sm-12 col-lg-6 py-5 ps-lg-5 axel-block1">
              <div className="border-2 border-dark">
                <div>
                    <img src="/axcel-company-societe.png" alt="prise en main" className="img-fluid"/>
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
                    <h5 className="card-title f-bold fs-3 axel-text-orange py-3">Notre vision & engagement</h5>
                    <h2 className="text-white fs-2 fw-bolder text-center">Simplifier les processus administratifs et
                    de garantir la conformité avec la réglementation en vigueur.</h2>
                    <div className="border border-info border-2 w-25 my-3"></div>
                    <p className="py-3 text-center text-white">Notre objectif est de simplifier les processus administratifs et de garantir la conformité avec la réglementation en vigueur, permettant ainsi à nos clients de se concentrer sur le développement et la croissance de leur activité en toute tranquillité d'esprit.</p>
                    <p className="text-center text-white">Depuis la création, nos clients se repartissent en 4 groupes d'activité</p>
                </div>
                <div className="col d-none d-lg-block"></div>
            </div>
            <div className="row align-items-center justify-content-center py-5">
              <div className="col-12 col-lg-3 d-flex justify-content-center align-items-center flex-column">
                  <div className={`${styles.boxCount} bg-white rounded-circle d-flex align-items-center justify-content-center m-3`}>
                      <h3 className="fw-bolder fs-2 m-0 w-100 text-center">60%</h3>
                  </div>
                  <p className="text-center text-warning">Création d'entreprise</p>
              </div>
              <div className="col-12 col-lg-3 d-flex justify-content-center align-items-center flex-column">
                <div className={`${styles.boxCount} bg-white border-primary rounded-circle d-flex align-items-center justify-content-center m-3`}>
                      <h3 className="fw-bolder fs-2 m-0 axel-text-bleu w-100 text-center">23%</h3>
                      
                </div>
                <p className="text-center text-warning">Conseil et Assistance</p>
              </div>
              <div className="col-12 col-lg-3 d-flex justify-content-center align-items-center flex-column">
                  <div className={`${styles.boxCount} bg-white rounded-circle d-flex align-items-center justify-content-center m-3`}>
                      <h3 className="fw-bolder fs-2 m-0 w-100 text-center">8%</h3>
                      
                  </div>
                  <p className="text-center text-warning">Lettre administrative</p>
              </div>
              <div className="col-12 col-lg-3 d-flex justify-content-center align-items-center flex-column">
                  <div className={`${styles.boxCount} bg-white rounded-circle d-flex align-items-center justify-content-center m-3`}>
                      <h3 className="fw-bolder fs-2 m-0 w-100 text-center">18%</h3>                      
                  </div>
                  <p className="text-center text-warning">Autres services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container my-lg-5 py-5">
          <div className="row justify-content-around px-3 align-items-center"> 
            <div className="col-sm-12 col-lg-6 py-5 ps-lg-5 axel-block1">
              <div className="border-2 border-dark">
                <div>
                    <img src="/surplus.png" alt="prise en main" className="img-fluid"/>
                </div>                                    
              </div>                                                     
            </div> 
            <div className="col-sm-12 col-lg-6 p-auto pe-lg-5">
              <div className="d-flex flex-column mb-3">
                  <h3 className="axel-text-orange fs-3 fw-bolder">Surplus</h3>                            
                  <h2 className="axel-text-blue fw-bolder pt-3">Services variés et professionnels</h2>
                  <div className="border border-info border-2 w-25 my-3"></div>   
                  <p className='py-3'>En plus du conseil et de l'assistance administrative, nous proposons une gamme de services complets pour répondre aux besoins variés de nos clients en matière de gestion d'entreprise.</p>  
                  <h5>Atteindre vos objectifs</h5>
                  <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{width: '75'+'%'}}>75%</div>
                  </div>  
                  <h5 className='pt-3'>Faciliter vos démarches administratives</h5>
                  <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{width: '90'+'%'}}>90%</div>
                  </div>          
              </div>   
              <div className='d-block py-4 py-lg-4'>
                  <button type="button" className="btn btn-info text-white">En savoir plus</button>
              </div>                          
            </div>
          </div>
        </div>
      </div>
      <div className='container pb-lg-5 mb-lg-5'>
            <div className="row d-flex justify-content-center">
                <div className="col d-none d-lg-block"></div>
                <div className="col col-lg-8 d-flex  flex-column justify-content-center align-items-center">
                    <h5 className="card-title f-bold fs-3 axel-text-orange py-3">Membre d'équipe dirigeante</h5>
                    <h2 className="axel-text-blue fs-2 fw-bolder text-center">Notre équipe performante et ambitieuse</h2>
                    <div className="border border-info border-2 w-25 my-3"></div>                    
                </div>
                <div className="col d-none d-lg-block"></div>
                
            </div>
            <Team />
      </div>
      
    </>
  );
}