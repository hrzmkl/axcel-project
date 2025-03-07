'use client'
import Link from 'next/link';
export default function NavBar(){
    return(
         <>
            <nav className="navbar navbar-expand-lg axel-bg-orange container-fluid">
                <div className="container">
                    <div className='row w-100'>
                        <Link className="navbar-brand text-white fw-bolder fs-5 d-block d-lg-none" target="_blank" href="#">Accueil</Link>
                        <button className="navbar-toggler text-white border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-white"></span>
                        </button>
                        <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-evenly w-100">
                            
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-white fw-bolder fs-5" target="_blank" href="/service" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Conseil et assistance
                                </Link>
                                <ul className="dropdown-menu mt-2" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item"  target="_blank" href="/conseil-creation-societe">Conseil en création<br/>de société</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item"  target="_blank" href="/assistance-modification-societe">Assistance à la modification<br/>de société</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item"  target="_blank" href="/assistance-formalisation-entreprise">Assistance en formalisation<br/>d'entreprise</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" target="_blank" href="/consultation-strategique-entrepreneurs">Consultation stratégique<br/>pour entrepreneurs</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-white fw-bolder fs-5" target="_blank" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Création
                                </Link>
                                <ul className="dropdown-menu mt-2" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" target="_blank" href="/creation-sarl-sarlu">SARL / SARLU</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" target="_blank" href="/creation-sa-sau">SA / SAU</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" target="_blank" href="/creation-entreprise-individuelle">ENTREPRISE INDIVIDUELLE</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" target="_blank" href="/creation-association">ASSOCIATION</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" target="_blank" href="/creation-ong">ONG</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" target="_blank" href="/creation-etablissement">ETABLISSEMENT</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" target="_blank" href="/ouverture-succursale-filiale">OUVERTURE SUCCURSALE / FILIALE</Link></li>
                                </ul>
                            </li>
                                <li className="nav-item dropdown d-flex">
                                    <Link className="nav-link text-white fw-bolder fs-5 text-nowrap" href="/service-coursier">Service de coursier </Link>
                                    <Link className="nav-link dropdown-toggle text-white fw-bolder ps-1 ps-lg-0" target="_blank"
                                          href="/service-coursier" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    </Link>
                                    <ul className="dropdown-menu mt-5"  id="dropLink"  aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" target="_blank"
                                                  href="/recuperation-diplome-releve-note-equivalence">Récupération
                                            diplôme,<br/>relevé de note, équivalence..</Link></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><Link className="dropdown-item" target="_blank"
                                                  href="/recuperation-traduction-acte-naissance-acte-de-mariage">Récupération
                                            /traduction<br/>acte de naissance,<br/>acte de mariage, ...</Link></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><Link className="dropdown-item" target="_blank"
                                                  href="/recuperation-certificats-de-mise-en-commerce">Récupération des
                                            certificats<br/>de mise en commerce</Link></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><Link className="dropdown-item" target="_blank"
                                                  href="/recuperation-certificats-de-consommabilite">Récupération des
                                            certificats<br/>de consommabilité</Link></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><Link className="dropdown-item" target="_blank"
                                                  href="/toutes-enregistrement-et-certification">Toutes
                                            enregistrement,<br/>certifications</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                <Link className="nav-link text-white fw-bolder fs-5" target="_blank" href="/a-propos" >A propos de nous</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bolder fs-5" target="_blank" href="/contact" >Contact</Link>
                            </li>
                                <li className="nav-item">
                                    <Link className="btn btn-info text-white fs-5" target="_blank" href="/devis">Demande de devis</Link>
                                </li>
                            </ul>           
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}