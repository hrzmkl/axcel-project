import Image from "next/image";
import Link from 'next/link';
export default function Footer(){
    return(
        <>
            <footer className="container-fluid bg-primary text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 d-flex flex-column mb-3 py-5">
                        <Link href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <Image
                                    src="/axcel-company-logo-transparent-99-104-.png"
                                    alt="Picture of the author"
                                    width={80}
                                    height={80}                             
                                />                                
                            </Link>
                            <p className="m-0 py-2">Société dédiée à fournir des services professionnels aux entreprises, création, modification, conseil et assistance administrative</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 d-flex flex-column mb-3 py-5">
                            <h3 className="text-warning">Liens rapides</h3>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="#">A propos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="#">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="#">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="">Devis</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 d-flex flex-column mb-3 py-5">
                            <h3 className="text-warning">Info contact</h3>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link href="" className="nav-link text-white">Arrêt bus Andravoahangy Ambony, Antananarivo 101</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link text-white">+261 38 73 066 32 / 034 11 918 40</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="#">contact@axcel.mg</Link>
                                </li>                                
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 d-flex flex-column mb-3 py-5">
                            <h3 className="text-warning">Newsletter</h3>
                            <p className="px-3">Suivre nos actualités via notre  newsletter et rester à jour de nouvelles offres et actualités pertinentes</p>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Votre email" aria-label="Votre email" aria-describedby="button-addon2" />
                                    <button className="btn text-bg-warning" type="button" id="button-addon2">Souscrire</button>
                                </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="d-flex justify-content-center align-items-center py-4">
                            <p className="text-white m-0">© 2024 Axcel Company - All rights reserved.</p>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </>
    );
}