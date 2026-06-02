'use client'
export default function NavBar(){
    return(
         <>
            <nav className="navbar navbar-expand-lg axel-bg-orange container-fluid">
                <div className="container">
                    <div className='row w-100'>
                        <a className="navbar-brand text-white fw-bolder fs-5 d-block d-lg-none"  href="#">Accueil</a>
                        <button className="navbar-toggler text-white border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-white"></span>
                        </button>
                        <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-evenly w-100">
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white fw-bolder fs-5"  href="/service" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Conseil et assistance
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item ok"   href="/conseil-creation-societe">Conseil en création<br/>de société</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item"   href="/assistance-modification-societe">Assistance à la modification<br/>de société</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item"  href="/assistance-formalisation-entreprise">Assistance en formalisation<br/>d'entreprise</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item"  href="/consultation-strategique-entrepreneurs">Consultation stratégique<br/>pour entrepreneurs</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white fw-bolder fs-5" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Création
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item"  href="/creation-sarl-sarlu">SARL / SARLU</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item"  href="/creation-sa-sau">SA / SAU</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item"  href="/creation-entreprise-individuelle">ENTREPRISE INDIVIDUELLE</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item"  href="/creation-association">ASSOCIATION</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item"  href="/creation-ong">ONG</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/creation-etablissement">ETABLISSEMENT</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/ouverture-succursale-filiale">OUVERTURE SUCCURSALE / FILIALE</a></li>
                                </ul>
                            </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white fw-bolder fs-5" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Service de coursier
                                    </a>
                                    <ul className="dropdown-menu"  id="dropa"  aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item"
                                                  href="/recuperation-diplome-releve-note-equivalence">Récupération
                                            diplôme,<br/>relevé de note, équivalence..</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item"
                                                  href="/recuperation-traduction-acte-naissance-acte-de-mariage">Récupération
                                            /traduction<br/>acte de naissance,<br/>acte de mariage, ...</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item"
                                                  href="/recuperation-certificats-de-mise-en-commerce">Récupération des
                                            certificats<br/>de mise en commerce</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item"
                                                  href="/recuperation-certificats-de-consommabilite">Récupération des
                                            certificats<br/>de consommabilité</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item"
                                                  href="/toutes-enregistrement-et-certification">Toutes
                                            enregistrement,<br/>certifications</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                <a className="nav-link text-white fw-bolder fs-5" href="/a-propos" >A propos de nous</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bolder fs-5" target="_blank" href="/contact" >Contact</a>
                            </li>
                                <li className="nav-item">
                                    <a className="btn btn-info text-white fs-5" target="_blank" href="https://wa.me/387306632">Demande de devis</a>
                                </li>
                            </ul>           
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}