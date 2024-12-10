import styles from './Propertie.module.css'
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import css from '../Effects.module.css'
export default function Properties(){
    return(
        <>
            <div className="container my-lg-5 py-lg-5">
                    <div className="row justify-content-around px-3">                        
                        <div className="col-sm-12 col-lg-6 p-auto pe-lg-5">
                            <div className="d-flex flex-column mb-3">
                                <h3 className="axel-text-orange fs-5">Propriétés</h3>                            
                                <h2 className="axel-text-blue fs-2 fw-bolder">Pourquoi nous choisir ? </h2>
                                <div className="border border-info border-2 w-25 my-3"></div>                           
                                                   
                            </div>
                            <div className={`${styles.axelBox} row axel-box border border-1 border-light align-items-start my-3 py-3 px-2`}>
                                <div className="axel-box-icon col-sm-12 col-lg-3">
                                    <div className={`${styles.icon} axel-text-blue`}>
                                        <CheckCircleIcon/>
                                    </div>
                                    
                                </div>
                                <div className="axel-box-content col-sm-12 col-lg-9">
                                    <h5 className='axel-text-blue'>Tarif avantageux et sans déplacement</h5>
                                    <p>Nous offrons des tarifs compétitifs sans sacrifier la qualité du service.
                                    Nous offrons des services sans nécessité de déplacement. Nous prenons en charge tous les aspects de votre projet, où que vous soyez !</p>
                                </div>
                            </div>
                            <div className={`${styles.axelBox} row axel-box border border-1 border-light align-items-start my-3 py-3 px-2`}>
                                <div className="axel-box-icon col-sm-12 col-lg-3">
                                    <div className={`${styles.icon} axel-text-blue`}>
                                        <CheckCircleIcon/>
                                    </div>
                                    
                                </div>
                                <div className="axel-box-content col-sm-12 col-lg-9 ">
                                    <h5 className='axel-text-blue'>Rapidité de service</h5>
                                    <p>Notre entreprise s'engage à fournir un service rapide sans compromettre la qualité.<br/>
                                    Nous respectons les délais et nous efforçons de répondre aux besoins de nos clients dans les plus brefs délais.</p>
                                </div>
                            </div> 
                            <div className={`${styles.axelBox} row axel-box border border-1 border-light align-items-start my-3 py-3 px-2`}>
                                <div className="axel-box-icon col-12 col-lg-3">
                                    <div className={`${styles.icon} axel-text-blue`}>
                                        <CheckCircleIcon/>
                                    </div>
                                    
                                </div>
                                <div className="axel-box-content col-sm-12 col-lg-9">
                                    <h5 className='axel-text-blue'>Fiabilité et confidentialité</h5>
                                    <p>Nous accordons une grande importance à la fiabilité et à la confidentialité. Nos clients peuvent avoir confiance en notre entreprise pour traiter leurs informations avec le plus grand professionnalisme et pour respecter la confidentialité de leurs données.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-sm-12 col-lg-6 pt-5 pt-lg-0 ps-lg-5">
                                <div className="border-2 border-dark">
                                    <div>
                                        <img src="/Axcel-cta-image.jpg" alt="A propos" className={`${styles.img} imgAnim img-fluid`}/>
                                    </div>
                                    
                                </div> 
                                <div className={`${css.blockEffect}`}></div>                       
                        </div>                         
                        
                    </div>
            </div>
        </>
    );
}