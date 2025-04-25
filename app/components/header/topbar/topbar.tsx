import Image from "next/image";
import Link from 'next/link';
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/24/solid';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/whatsapp'
import { Lora } from 'next/font/google'
const lora = Lora({
    weight: ['700'],
    style: ['italic'],
    subsets: ['latin'],
})
import { Nunito } from 'next/font/google'
const nunito = Nunito({
    weight: ['700'],
    subsets: ['latin'],
})

export default function Topbar(){
    return(
        <>
            <div className="px-3 py-2 bg-white text-dark">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
                        <Link target="_blank" href="/" className="d-flex align-items-center my-2 text-white text-decoration-none">
                            <Image
                                src="/axcel-company-logo-transparent-99-104-.png"
                                alt="Axcel Company logo"
                                width={130}
                                height={130}
                            />
                        </Link>
                        <div className="d-flex flex-column">
                            <p className="axel-text-orange logo-text fs-2 m-2 text-center"><span className={lora.className}>Vos dossiers, aux mains des experts</span></p>
                            <ul className="nav d-none d-md-flex col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small text-dark">
                                <li>
                                    <MapPinIcon className="axel-top-icon me-1"/><span className={`${nunito.className} text-20`}> Arrêt bus pharmacie Aina Andravoahangy Ambony, Antananarivo 101</span>
                                </li>
                            </ul>

                            <ul className="nav d-none d-md-flex col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small text-dark">
                                <li>
                                    <p><Link target="_blank" href="#" className="nav-link text-dark d-flex align-items-start">

                                        <PhoneIcon className="axel-top-icon me-1"/> <span className={`${nunito.className} text-20`}>+261 38 73 066 32 / 034 11 918 40</span>
                                    </Link></p>
                                </li>
                                <li>
                                    <p> <Link target="_blank" href="mailto:contact@axcel.mg" className="nav-link text-dark d-flex align-items-start">
                                        <EnvelopeIcon className="axel-top-icon icon-env me-1"/> <span className={`${nunito.className} text-20`}>Email : contact@axcel.mg</span>
                                    </Link></p>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex flex-column">
                            <ul className="nav d-none d-md-flex col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small text-dark">

                                <li className="pe-3">
                                    <SocialIcon network="facebook" url="https://web.facebook.com/profile.php?id=100092397681842&mibextid=ZbWKwL&_rdc=1&_rdr" target="_blank" className="axel-social-icon" bgColor="#152039"/>
                                </li>
                                <li>
                                    <SocialIcon network="whatsapp" url="https://wa.me/387306632" target="_blank" bgColor="#152039" className="axel-social-icon"/>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}