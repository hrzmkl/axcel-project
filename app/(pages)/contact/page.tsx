import PageHero from '@/app/components/pageHero/pageHero'
import OtherService from '@/app/components/other-service/otherServics';
import React from "react";
export const metadata = {
  title: "Contact - Axcel company",  
}
export default function contact(){
    return(
        <>
           <PageHero 
                imgSrc="/hands-image.jpg" 
                desc="En plus du conseil et de l'assistance administrative, nous proposons une gamme de services complets pour répondre aux besoins variés de nos clients en matière de gestion d'entreprise à Madagascar." 
                btnText="Rentrons en contact"
            /> 
            
            <div className="container my-lg-5 py-5">
                <div className="row justify-content-around px-3 align-items-center">              
                    <div className="col-sm-12 col-lg-6 p-auto pe-lg-5">
                        <div className="d-flex flex-column mb-3">                                                      
                            <h2 className="axel-text-blue fw-bolder pt-3">Restons en contact</h2>
                            <div className="border border-info border-2 w-25 my-3"></div>   
                            <p className='py-3'>Pour toute demande d'information, demande de devis, demande de partenariat ou tout autre raison n'hésitez pas à nous contacter directement via le formulaire ci-dessous. Nous vous répondrons dans un meilleur délai.</p>  
                                   
                        </div>
                            <form>
                                
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingNom" placeholder="Votre nom" required/>
                                    <label htmlFor="floatingNom">Votre nom</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInputMail" placeholder="name@example.com" required/>
                                    <label htmlFor="floatingInputMail">Adresse email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingObject" placeholder="Objet du message" required/>
                                    <label htmlFor="floatingObject">Objet du message</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" placeholder="Message" rows="4" id="floatingTextarea" style={{height: 100+'px'}}></textarea>
                                    <label htmlFor="floatingTextarea">Message</label>
                                </div>
                                <button type="submit" className="btn btn-info fw-bolder text-white my-2">Envoyer</button>
                        </form>                                    
                    </div>
                    <div className="col-sm-12 col-lg-6 py-5 ps-lg-5 axel-block1">
                    <div className="border-2 border-dark">
                        <div>
                            <img src="/surplus.png" alt="prise en main" className="img-fluid"/>
                        </div>                                    
                    </div>                                                     
                    </div>
                </div>
            </div>
            <div className='container-fluid p-0'>
            <iframe style={{width:100 +'%',height:500+'px'}} src="https://maps.google.com/maps?q=Andravoahangy, Antananarivo, MG&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" aria-label="Andravoahangy, Antananarivo, MG"></iframe>
            </div>
            
        </>
    )
}