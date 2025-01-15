import Link from "next/link";
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { UsersIcon } from '@heroicons/react/24/outline';
import { FolderIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
export default function serviceSection(){
    return(
        <>
            <div className="container my-5 py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col d-none d-lg-block"></div>
                    <div className="col col-lg-8 d-flex  flex-column justify-content-center align-items-center">
                        <h2 className="axel-text-blue fs-2 fw-bolder text-center">Services professionnels aux entreprises.</h2>
                        <div className="border border-info border-2 w-25 my-3"></div>
                        <p className="py-3 text-center">Nous accompagnons depuis 2022 les entrepreneurs, les investisseurs dans la formalisation de leurs entreprises..</p>
                    </div>
                    <div className="col d-none d-lg-block"></div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                    <div className="col">
                        <div className="card h-100 axel-box">
                                <div className="p-3 w-25 text-info axel-box-icon">
                                    <ChatBubbleBottomCenterIcon/>
                                </div>
                            <div className="card-body">
                                <h5 className="card-title f-bold fs-3 axel-text-blue">Conseil et assistance</h5>
                                <p className="card-text">De la création à la gestion optimisée d'une entreprise, nous offres des conseil et assistance avisé à nos clients</p>
                                
                            </div>
                            <div className="p-4">
                                <Link target="_blank" href="/service" className="btn btn-primary">En savoir plus</Link>
                            </div> 
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 axel-box">
                            <div className="p-3 w-25 text-info axel-box-icon">
                                <BuildingOfficeIcon/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title f-bold fs-3 axel-text-blue">Création d'entreprise</h5>
                                <p className="card-text">Entreprise individuelle, SARLU, SARL, nous prenons en charge la création de votre entreprise de A à Z.</p>
                                
                            </div>
                            <div className="p-4">
                                <Link target="_blank" href="/service" className="btn btn-primary">En savoir plus</Link>
                            </div> 
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 axel-box">
                            <div className="p-3 w-25 text-info axel-box-icon">
                                <UsersIcon/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title f-bold fs-3 axel-text-blue">Accompagnement</h5>
                                <p className="card-text">Nous accompagnons nos entreprises partenaires et clients pour traiter leurs informations avec le plus grand professionnalisme et pour respecter la confidentialité de leurs données.</p>
                                
                            </div>
                            <div className="p-4">
                                <Link target="_blank" href="/service" className="btn btn-primary">En savoir plus</Link>
                            </div> 
                        </div>
                    </div>                    
                
                    <div className="col">
                        <div className="card h-100 axel-box">
                            <div className="p-3 w-25 text-info axel-box-icon">
                                <FolderIcon/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title f-bold fs-3 axel-text-blue">Coursier administratif</h5>
                                <p className="card-text">Nous offrons des services sans nécessité de déplacement. C'est nous qui occupons de tous à votre place!</p>
                                
                            </div>
                            <div className="p-4">
                                <Link target="_blank" href="/service" className="btn btn-primary">En savoir plus</Link>
                            </div> 
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 axel-box">
                            <div className="p-3 w-25 text-info axel-box-icon">
                                <EnvelopeIcon/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title f-bold fs-3 axel-text-blue">Lettre administrative</h5>
                                <p className="card-text">Rédaction des lettres administratives et demande d'autorisation ministérielle.</p>
                                
                            </div>
                            <div className="p-4">
                                <Link target="_blank" href="/service" className="btn btn-primary">En savoir plus</Link>
                            </div> 
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 axel-box">
                            <div className="p-3 w-25 text-info axel-box-icon">
                                <ClipboardDocumentListIcon/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title f-bold fs-3 axel-text-blue">Autres services</h5>
                                <p className="card-text">Une gamme de services complets pour répondre aux besoins variés de nos clients.</p>
                            </div>    
                            <div className="p-4">
                                <Link target="_blank" href="/service" className="btn btn-primary">En savoir plus</Link>
                            </div>                        
                        </div>
                    </div>                    
                </div>
            </div>
            
        </>
    );
}