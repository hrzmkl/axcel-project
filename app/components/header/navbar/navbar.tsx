import Link from 'next/link';
import '@/app/components/header/navbar/navbar.module.css'
export default function NavBar(){
    return(
         <>
           <nav className="navbar navbar-expand-lg nav nav-pills nav-justified axel-bg-orange">
                <div className="container">
                    <Link className="navbar-brand text-white fw-bolder d-lg-none d-block" href="/">Accueil</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse justify-content-evenly" id="navbarNavDropdown">
                           
                                <div className="dropdown btn-group align-items-center">
                                    <Link className="dropdown-item text-white fw-semibold navbar-brand m-0" href="#">Conseil et assistance</Link>
                                    <button type="button" className="btn bg-none border-0 dropdown-toggle dropdown-toggle-split text-white fw-bolder" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu top-50 mt-4">
                                        <li><Link className="dropdown-item" href="#">Conseil en création de société</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" href="#">Assistance à la modification de société</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" href="#">Assistance en formalisation d'entreprise</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" href="#">Consultation stratégique pour entrepreneurs</Link></li>
                                    </ul>
                                </div>
                            
                                <div className="dropdown btn-group align-items-center">
                                    <Link className="dropdown-item text-white fw-semibold navbar-brand m-0" href="#">Création</Link>
                                    <button type="button" className="btn bg-none border-0 dropdown-toggle dropdown-toggle-split text-white fw-bolder" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
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
                                </div>
                                <div className="dropdown btn-group align-items-center">
                                    <Link className="dropdown-item text-white fw-semibold navbar-brand m-0" href="#">Service de coursier</Link>
                                    <button type="button" className="btn bg-none border-0 dropdown-toggle dropdown-toggle-split text-white fw-bolder" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
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
                                </div>
                                <div className="dropdown btn-group align-items-center">
                                    <Link className="dropdown-item text-white fw-semibold navbar-brand m-0" href="#">A propos de nous</Link>
                                    <button type="button" className="btn bg-none border-0 dropdown-toggle dropdown-toggle-split text-white fw-bolder" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu top-50 mt-4">
                                        <li><Link className="dropdown-item" href="#">Action</Link></li>
                                        <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                        <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" href="#">Separated link</Link></li>
                                    </ul>
                                </div>
                        </div>                    
                </div>
            </nav>
        </>
    );
}