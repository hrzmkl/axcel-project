import { CheckCircleIcon } from '@heroicons/react/24/solid';
import styles from './AboutSection.module.css'
export default function aboutSection(){
    return(
        <>
            <div className="container">
                <div className="row align-items-center bg-light">
                    <div className="col-12 col-lg-6 p-0">
                        <img src="/about-section.jpg" alt="A propos" className="img-fluid"/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="d-flex flex-column p-lg-5 pt-5 mt-5">
                            <h3 className="axel-text-orange fs-5">A propos de nous</h3>                            
                            <h1 className="axel-text-blue fs-2 fw-bolder">Créez votre société en toute sérénité, nous nous occupons de tout</h1>
                            <div className="border border-info border-2 w-25 my-3"></div>
                            <p className='pt-2 pt-lg-4'>Axcel Company est une société dédiée à fournir des services professionnels aux entreprises. Nous accompagnons depuis 2022 les entrepreneurs, les investisseurs dans la formalisation de leurs entreprises.</p>
                            <div className={`${styles.box} axel-box-icon me-3 d-flex align-items-center pt-4 pt-lg-4`}>
                                <div className={`${styles.iconBox} axel-box-icon me-3 `}>
                                    <CheckCircleIcon/>
                                </div>
                                <div className="axel-box-content">
                                    <p>Nous assistons les étrangers envisageant d’investir à Madagascar.</p>
                                </div>
                            </div>
                            <div className={`${styles.box} axel-box-icon me-3 d-flex align-items-center pt-4 pt-lg-4`}>
                                <div className={`${styles.iconBox} axel-box-icon me-3 `}>
                                    <CheckCircleIcon/>
                                </div>
                                <div className="axel-box-content">
                                    <p>Nous proposons des services de coursiers administratifs professionnels.</p>
                                </div>
                            </div>
                            <div className='d-block py-4 py-lg-4'>
                                <a target="_blank" href="/a-propos" type="button" className="btn btn-info text-white">En savoir plus</a>
                            </div>                        
                        </div>                       
                    </div>
                </div>
            </div>
        </>
    );
}