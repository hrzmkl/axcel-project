import Image from "next/image";
import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon,MapPinIcon } from '@heroicons/react/24/solid';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/whatsapp'
import '@/app/components/footer/footer.css'
export default function Footer(){
    return(
        <>
            <footer className="container-fluid text-white position-relative p-0">
                <div className="axel1 axel-row axel-row-stretch-auto axel-height-default axel-footer-bg">
                    <div className="axel-row-shape">
                        <div className="axel-row-svg">
                            <svg className="axel-svg-top">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                    <path className="axel-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                                </svg>
                            </svg>
                            <svg className="axel-svg-bottom">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                        <path className="axel-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
                                </svg>
                            </svg>						
                        </div>
                    </div>                
                    <div className="container" id="footer-content">
                        <div className="row border border-top-0 border-end-0 border-start-0 border-border-bottom-1  border-light pb-5">
                            <div className="col-12 col-md-6 col-lg-3 d-flex flex-column pb-5 align-items-center align-items-lg-start">
                                <Link target="_blank" href="/" className="d-flex align-items-center align-items-lg-start my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
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
                                        <Link className="nav-link text-white ps-0" target="_blank" href="/a-propos">A propos</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white ps-0" target="_blank" href="/service">Service</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white ps-0" target="_blank" href="/contact">Contact</Link>
                                    </li>                                
                                </ul>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 d-flex flex-column pb-5 align-items-center align-items-lg-start">
                                <h3 className="text-warning">Info contact</h3>
                                <ul className="nav flex-column">
                                    <li className="nav-item ps-0 pt-2 pb-4 d-flex align-items-center align-items-lg-start justify-content-center justify-content-lg-start">
                                        <MapPinIcon className="axel-bottom-icon icon-map me-1"/><Link target="_blank" href="" className="nav-link text-white ps-0 py-0"> Arrêt bus Andravoahangy Ambony, Antananarivo 101</Link>
                                    </li>
                                    <li className="nav-item ps-0 pb-4 d-flex align-items-center align-items-lg-start justify-content-center justify-content-lg-start">
                                        <PhoneIcon className="axel-bottom-icon me-1"/><Link target="_blank" href="" className="nav-link text-white ps-0 py-0"> +261 38 73 066 32 / 034 11 918 40</Link>
                                    </li>
                                    <li className="nav-item ps-0 d-flex align-items-center align-items-lg-start justify-content-center justify-content-lg-start">
                                        <EnvelopeIcon className="axel-bottom-icon icon-env me-1"/><Link className="nav-link text-white ps-0 py-0" target="_blank" href="mailto:contact@axcel.mg"> contact@axcel.mg</Link>
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
                </div>
            </footer>
        </>
    );
}