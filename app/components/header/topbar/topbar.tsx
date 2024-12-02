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
                        <Link href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                            <Image
                                src="/axcel-company-logo-transparent-99-104-.png"
                                alt="Picture of the author"
                                width={96}
                                height={100}                             
                            />
                            <p className="text-warning fs-4 m-2">Vos dossiers,<br/>aux mains des experts</p>
                        </Link>

                        <ul className="nav d-none d-md-flex col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small text-dark">
                            <li>
                                <a  className="nav-link text-dark">          
                            
                                    <PhoneIcon className="axel-top-icon"/> +261 38 73 066 32 / 034 11 918 40
                                </a>
                            </li>
                            <li>
                                <Link href="mailto:contact@axcel.mg" className="nav-link text-dark">
                                    <EnvelopeIcon className="axel-top-icon"/> Email : contact@axcel.mg
                                </Link>
                            </li>
                            <li className="pe-3">
                            <SocialIcon network="facebook" url="https://web.facebook.com/profile.php?id=100092397681842&mibextid=ZbWKwL&_rdc=1&_rdr" target="_blank" className="axel-social"/>
                            </li> 
                            <li>
                                <SocialIcon network="whatsapp" url="https://wa.me/387306632" target="_blank" className="axel-social"/>
                            </li>              
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}