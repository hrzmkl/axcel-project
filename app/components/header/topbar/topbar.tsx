import Image from "next/image";
import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/whatsapp'

export default function Topbar(){
    return(
        <>
            <div className="px-3 py-2 bg-white text-dark">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link target="_blank" href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                            <Image
                                src="/axcel-company-logo-transparent-99-104-.png"
                                alt="Axcel company logo"
                                width={96}
                                height={100}                             
                            />
                            <p className="axel-text-orange logo-text fs-4 m-2">Vos dossiers,<br/>aux mains des experts</p>
                        </Link>

                        <ul className="nav d-none d-md-flex col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small text-dark">
                            <li>
                                <p><Link target="_blank" href="#" className="nav-link text-dark d-flex align-items-start">   
                            
                                    <PhoneIcon className="axel-top-icon me-1"/> <span className="axel-text">+261 38 73 066 32 / 034 11 918 40</span>
                                </Link></p>
                            </li>
                            <li>
                               <p> <Link target="_blank" href="mailto:contact@axcel.mg" className="nav-link text-dark d-flex align-items-start">
                                    <EnvelopeIcon className="axel-top-icon icon-env me-1"/> <span className="axel-text">Email : contact@axcel.mg</span>
                                </Link></p>
                            </li>
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
        </>
    );
}