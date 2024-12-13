import Link from 'next/link';
export default function NavBar(){
    return(
         <>
            <nav className="navbar navbar-expand-lg axel-bg-orange container-fluid">
                <div className="container">
                    <Link className="navbar-brand text-white fw-bolder fs-5 d-block d-lg-none" href="#">Accueil</Link>
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-white fw-bolder fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Conseil et assistance
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="#">Conseil en création<br/>de société</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">Assistance à la modification<br/>de société</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">Assistance en formalisation<br/>d'entreprise</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">Consultation stratégique<br/>pour entrepreneurs</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-white fw-bolder fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Création
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="#">SARL / SARLU</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">SA / SAU</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">ENTREPRISE INDIVIDUELL</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">ASSOTIATION</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">ONG</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">ETABLISSEMENT</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">OUVERTURE SUCCURSALE / FILIALE</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-white fw-bolder fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Service de coursier
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="#">Récupération diplôme,<br/>relevé de note, équivalence..</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">Récupération /traduction<br/>acte de naissance,<br/>acte de mariage, ...</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">Récupération des certificats<br/>de mise en commerce</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">Récupération des certificats<br/>de consommabilité</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">Toutes enregistrement,<br/>certifications</Link></li>
                            </ul>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-bolder fs-5" href="/a-propos">A propos de nous</Link>
                        </li>
                        </ul>           
                    </div>
                </div>
            </nav>
        </>
    );
}