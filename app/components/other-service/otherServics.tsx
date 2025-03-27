import styles from '@/app/(pages)/page.module.css'
import { HomeIcon,UserGroupIcon,BuildingOfficeIcon,BuildingOffice2Icon,BuildingLibraryIcon } from '@heroicons/react/20/solid';
export default function OtherService(){
    return(
        <>
            <div className='container py-5 mb-lg-5'>
                <div className="row d-flex justify-content-center py-5">
                        <div className="col d-none d-lg-block"></div>
                        <div className="col col-lg-8 d-flex  flex-column justify-content-center align-items-center">
                            <h5 className="card-title f-bold fs-3 axel-text-orange py-3">Nous proposons aussi d'autres services
                            </h5>
                            <h2 className="axel-text-blue fs-2 fw-bolder text-center">Une gamme de services complets pour des clients variés
                            </h2>
                            <p className='text-center'>Notre objectif est de simplifier les processus administratifs et de garantir la conformité avec la réglementation en vigueur, permettant ainsi à nos clients de se concentrer sur le développement et la croissance de leur activité en toute tranquillité d'esprit.</p>
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
                                <h3 className="card-title">Renouvellement carte fiscale</h3>
                                <p className="card-text">Renouveler annuellement la carte fiscale pour se conformer aux xigences de l'Etat.</p>
                                
                            </div>                        
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-header bg-transparent border-0">
                                <BuildingOfficeIcon className={`${styles.icon2} axel-text-orange`}/>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Changement, rajout d'activité</h3>
                                <p className="card-text">Décision de changements, mise à jour des statuts, formalité à respecter.</p>                    
                            </div>                                      
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-header bg-transparent border-0">
                                <BuildingOfficeIcon className={`${styles.icon2} axel-text-orange`}/>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Changement siège social</h3>
                                <p className="card-text">Modifier son siège principal nécessite une série de démarche juridique et administratif à respecter.</p>                    
                            </div>                                        
                        </div>
                    </div>           
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-header bg-transparent border-0">
                                <UserGroupIcon className={`${styles.icon2} axel-text-orange`}/>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Cessation d'activité</h3>
                                <p className="card-text">Pour les entreprises souhaitant procéder à l'arrêt de l'activité économique</p>
                                
                            </div>                        
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-header bg-transparent border-0">
                                <BuildingOffice2Icon className={`${styles.icon2} axel-text-orange`}/>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Rédaction lettre administrative</h3>
                                <p className="card-text">Nous rédigeons des lettres administratives telles que demande d'agrément, permis de construire.</p>                    
                            </div>                                      
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-header bg-transparent border-0">
                                <BuildingLibraryIcon className={`${styles.icon2} axel-text-orange`}/>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Diverses demandes</h3>
                                <p className="card-text">Nous traitons tous types de demandes (Agrément, autorisation ministérielle...)</p>                    
                            </div>                                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}