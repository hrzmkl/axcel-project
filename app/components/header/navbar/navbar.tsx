import Link from 'next/link';
export default function NavBar(){
    return(
         <>
            <nav className="navbar navbar-expand-lg axel-bg-orange">
                
                <div className="container">
                    <Link className="nav-link text-white fw-bolder fs-5 d-block d-lg-none" href="#">Accueil</Link> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown d-inline-flex align-items-center ">
                            <Link className="nav-link text-white fw-bolder fs-5" href="#" >
                                Conseil et assistance
                            </Link> 
                            <Link href="#" type="button" className=" fs-5 text-white dropdown-toggle dropdown-toggle-split d-flex align-items-center" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </Link>
                            <ul className="dropdown-menu top-50 mt-4">
                                <li><Link className="dropdown-item" href="#">Conseil en création de société</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">Assistance à la modification de société</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">Assistance en formalisation d'entreprise</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">Consultation stratégique pour entrepreneurs</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown d-inline-flex align-items-center ">
                            <Link className="nav-link text-white fw-bolder fs-5" href="#" >
                                Création
                            </Link> 
                            <Link href="#" type="button" className=" fs-5 text-white dropdown-toggle dropdown-toggle-split d-flex align-items-center" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </Link>
                            <ul className="dropdown-menu top-50 mt-4">
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
                        <li className="nav-item dropdown d-inline-flex align-items-center ">
                            <Link className="nav-link text-white fw-bolder fs-5" href="#" >
                            Service de coursier
                            </Link> 
                            <Link href="#" type="button" className=" fs-5 text-white dropdown-toggle dropdown-toggle-split d-flex align-items-center" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </Link>
                            <ul className="dropdown-menu top-50 mt-4">
                                <li><Link className="dropdown-item" href="#">Récupération diplôme, relevé de note, équivalence..</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">Récupération / traduction acte de naissance, acte de mariage, ...</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">Récupération des certificatq de mise en commerce</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">Récupération des certificats de consommabilité</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">Toutes enregistrement, certifications</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-bolder fs-5" href="#" >
                              A propos de nous
                            </Link>                            
                        </li>
                        
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </>
    );
}