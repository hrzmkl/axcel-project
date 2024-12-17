import styles from './Team.module.css'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/pinterest'
import 'react-social-icons/twitter'
import 'react-social-icons/linkedin'
export default function Team(){
    return(
        <>
            <div className='container pt-lg-5  pb-5'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col px-2 px-lg-5">
                        <div className="card h-100">
                            <img src="/team/stephen-ceo-axcel-7.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body text-center">
                                <h5 className="card-title axel-text-blue">Stephane A</h5>
                                <small className="card-text">CEO</small>
                            </div>
                            <div className="card-footer axel-bg-blue-2 d-flex justify-content-evenly px-5">
                                <SocialIcon network="facebook" url="" target="_blank" className="axel-social-icon" bgColor="#152039"/>
                                <SocialIcon network="twitter" url="" target="_blank" className="axel-social-icon" bgColor="#152039"/>
                                <SocialIcon network="linkedin" url="" target="_blank" className="axel-social-icon" bgColor="#152039"/>
                                <SocialIcon network="pinterest" url="" target="_blank" className="axel-social-icon" bgColor="#152039"/>
                            </div>
                        </div>
                    </div>
                    <div className="col px-2 px-lg-5">
                        <div className="card h-100">
                            <img src="/team/carol-1.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body text-center">
                                <h5 className="card-title axel-text-blue">Carol R.</h5>
                                <small className="card-text">Servie administratif</small>
                            </div>
                            <div className="card-footer axel-bg-blue-2 d-flex justify-content-evenly px-5">
                                <SocialIcon network="facebook" url="" target="_blank" className="axel-social-icon" bgColor="#152039"/>
                                <SocialIcon network="twitter" url="" target="_blank" className="axel-social-icon" bgColor="#152039"/>
                                <SocialIcon network="linkedin" url="" target="_blank" className="axel-social-icon" bgColor="#152039"/>
                                <SocialIcon network="pinterest" url="" target="_blank" className="axel-social-icon" bgColor="#152039"/>
                            </div>
                        </div>
                    </div>
                    <div className="col px-2 px-lg-5">
                        <div className="card h-100">
                            <img src="/team/coursier-manager-7.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body text-center">
                                <h5 className="card-title axel-text-blue">Steven R.</h5>
                                <small className="card-text">Coursier Manager</small>
                            </div>
                            <div className="card-footer axel-bg-blue-2 d-flex justify-content-evenly px-5">
                                <SocialIcon network="facebook" url="" target="_blank" className="axel-social-icon" bgColor="#152039"/>
                                <SocialIcon network="twitter" url="" target="_blank" className="axel-social-icon" bgColor="#152039"/>
                                <SocialIcon network="linkedin" url="" target="_blank" className="axel-social-icon" bgColor="#152039"/>
                                <SocialIcon network="pinterest" url="" target="_blank" className="axel-social-icon" bgColor="#152039"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}