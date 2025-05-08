'use client'
import Link from 'next/link';
import Image from "next/image";
import { SocialIcon } from 'react-social-icons/component'
export default function NavBarScroll(){
    return(
         <>            
            <nav className="fixed-top navbar navbar-expand-lg bg-white container-fluid shadow-lg" id="navScroll">
                <div className="container">
                    
                        <div className="col-2">
                            <Link  href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <Image
                                    src="/axcel-company-logo--100x103.jpg"
                                    alt="Axcel Company logo"
                                    width={100}
                                    height={103}
                                />                            
                            </Link>
                        </div>
                        <div className="col-8 collapse navbar-collapse justify-content-around"  id="navbarScroll">
                            <ul className="navbar-nav mb-2 mb-lg-0 justify-content-evenly w-100">
                            
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle axel-text-blue fw-bolder fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Conseil et assistance
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item"  href="/conseil-creation-societe">Conseil en création<br/>de société</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item"  href="/assistance-modification-societe">Assistance à la modification<br/>de société</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item"  href="/assistance-formalisation-entreprise">Assistance en formalisation<br/>d'entreprise</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item"  href="/consultation-strategique-entrepreneurs">Consultation stratégique<br/>pour entrepreneurs</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle axel-text-blue fw-bolder fs-5"  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Création
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item"  href="/creation-sarl-sarlu">SARL / SARLU</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item"  href="/creation-sa-sau">SA / SAU</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item"  href="/creation-entreprise-individuelle">ENTREPRISE INDIVIDUELLE</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item"  href="/creation-association">ASSOCIATION</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item"  href="/creation-ong">ONG</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item"  href="/creation-etablissement">ETABLISSEMENT</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item"  href="/ouverture-succursale-filiale">OUVERTURE SUCCURSALE / FILIALE</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown d-flex">
                                <Link className="nav-link axel-text-blue fw-bolder fs-5" href="#">Service de coursier</Link>
                                <Link className="nav-link dropdown-toggle axel-text-blue fw-bolder fs-5 ps-1 ps-lg-0"  href="/service-coursier" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                                </Link>
                                <ul className="dropdown-menu" id="dropLink" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item"  href="/recuperation-diplome-releve-note-equivalence">Récupération diplôme,<br/>relevé de note, équivalence..</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item"  href="/recuperation-traduction-acte-naissance-acte-de-mariage">Récupération /traduction<br/>acte de naissance,<br/>acte de mariage, ...</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" href="/recuperation-certificats-de-mise-en-commerce">Récupération des certificats<br/>de mise en commerce</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" href="/recuperation-certificats-de-consommabilite">Récupération des certificats<br/>de consommabilité</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" href="/toutes-enregistrement-et-certification">Toutes enregistrement,<br/>certifications</Link></li>
                                </ul>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link axel-text-blue fw-bolder fs-5"  href="/a-propos">A propos de nous</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link axel-text-blue fw-bolder fs-5" target="_blank" href="/contact">Contact</Link>
                            </li>                            
                            </ul>           
                        </div>
                        <div className="col-2 text-end">
                            <Link className="btn btn-info text-white fs-5" target="_blank" href="/devis">Demande de devis</Link>
                        </div>
                    
                </div>
            </nav>           
        </>
    );
}