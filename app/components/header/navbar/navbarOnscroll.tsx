import Link from 'next/link';
import Image from "next/image";
import { SocialIcon } from 'react-social-icons/component'
export default function NavBarScroll(){
    return(
         <>            
            <nav className="fixed-top navbar navbar-expand-lg bg-white container-fluid shadow-lg" id="navScroll">
                <div className="container">
                    
                        <div className="col-2">
                            <Link href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <Image
                                    src="/axcel-company-logo-transparent-99-104-.png"
                                    alt="Axcel company logo"
                                    width={96}
                                    height={100}                             
                                />                            
                            </Link>
                        </div>
                        <div className="col-8 collapse navbar-collapse justify-content-around"  id="navbarScroll">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                            
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle axel-text-blue fw-bolder fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <Link className="nav-link dropdown-toggle axel-text-blue fw-bolder fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <Link className="nav-link dropdown-toggle axel-text-blue fw-bolder fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <Link className="nav-link axel-text-blue fw-bolder fs-5" href="/a-propos">A propos de nous</Link>
                            </li>
                            </ul>           
                        </div>
                        <div className="col-2 text-end">
                            <SocialIcon network="facebook" url="https://web.facebook.com/profile.php?id=100092397681842&mibextid=ZbWKwL&_rdc=1&_rdr" target="_blank" className="axel-social-icon me-3" bgColor="#152039"/>
                            <SocialIcon network="whatsapp" url="https://wa.me/387306632" target="_blank" bgColor="#152039" className="axel-social-icon"/>
                        </div>
                    
                </div>
            </nav>           
        </>
    );
}