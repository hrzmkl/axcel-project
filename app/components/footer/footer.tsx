import Image from "next/image";
import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon,MapPinIcon } from '@heroicons/react/24/solid';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/whatsapp'
export default function Footer(){
    return(
        <>
            <footer className="container-fluid axel-footer-bg text-white">                
                <div className="container">
                    <div className="row border border-top-0 border-end-0 border-start-0 border-border-bottom-1  border-light pb-5">
                        <div className="col-12 col-md-6 col-lg-3 d-flex flex-column pb-5 align-items-center align-items-lg-start">
                            <Link href="/" className="d-flex align-items-center align-items-lg-start my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <Image
                                    src="/axcel-company-logo-transparent-99-104-.png"
                                    alt="Picture of the author"
                                    width={80}
                                    height={80}                             
                                />                                
                            </Link>
                            <p className="m-0 py-4">Société dédiée à fournir des services professionnels aux entreprises, création, modification, conseil et assistance administrative</p>
                            <div className="d-flex">
                                <SocialIcon network="facebook" url="https://web.facebook.com/profile.php?id=100092397681842&mibextid=ZbWKwL&_rdc=1&_rdr" target="_blank" bgColor="#152039" className="axel-social-icon me-2"/>
                                <SocialIcon network="whatsapp" url="https://wa.me/387306632" target="_blank" bgColor="#152039" className="axel-social-icon"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 d-flex flex-column pb-5 align-items-center align-items-lg-start">
                            <h3 className="text-warning">Liens rapides</h3>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link text-white ps-0" href="/a-propos">A propos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white ps-0" href="/service">Service</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white ps-0" href="/contact">Contact</Link>
                                </li>                                
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 d-flex flex-column pb-5 align-items-center align-items-lg-start">
                            <h3 className="text-warning">Info contact</h3>
                            <ul className="nav flex-column">
                                <li className="nav-item ps-0 pt-2 pb-4 d-flex align-items-center align-items-lg-start justify-content-center justify-content-lg-start">
                                    <MapPinIcon className="axel-bottom-icon icon-map me-1"/><Link href="" className="nav-link text-white ps-0 py-0"> Arrêt bus Andravoahangy Ambony, Antananarivo 101</Link>
                                </li>
                                <li className="nav-item ps-0 pb-4 d-flex align-items-center align-items-lg-start justify-content-center justify-content-lg-start">
                                    <PhoneIcon className="axel-bottom-icon me-1"/><Link href="" className="nav-link text-white ps-0 py-0"> +261 38 73 066 32 / 034 11 918 40</Link>
                                </li>
                                <li className="nav-item ps-0 d-flex align-items-center align-items-lg-start justify-content-center justify-content-lg-start">
                                    <EnvelopeIcon className="axel-bottom-icon icon-env me-1"/><Link className="nav-link text-white ps-0 py-0" href="mailto:contact@axcel.mg"> contact@axcel.mg</Link>
                                </li>                                
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 d-flex flex-column pb-5 align-items-center align-items-lg-start">
                            <h3 className="text-warning">Newsletter</h3>
                            <p className="ps-0 pt-2">Suivre nos actualités via notre  newsletter et rester à jour de nouvelles offres et actualités pertinentes</p>
                                <div className="input-group mb-3 py-4">
                                    <input type="text" className="form-control" placeholder="Votre email" aria-label="Votre email" aria-describedby="button-addon2" />
                                    <button className="btn text-bg-warning" type="button" id="button-addon2">Souscrire</button>
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex justify-content-center align-items-center py-4">
                                <p className="text-white">© 2024 Axcel Company - All rights reserved.</p>
                            </div>
                        </div>                        
                    </div>
                </div>
            </footer>
        </>
    );
}