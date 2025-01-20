import PageHero from '@/app/components/pageHero/pageHero'
import React from "react";
export const metadata = {
  title: 'Remerciement - Axcel company',  
}

export default function Page() {
    
  return (
    <>
      <PageHero 
                imgSrc="/hands-image.jpg" 
                desc="En plus du conseil et de l'assistance administrative, nous proposons une gamme de services complets pour répondre aux besoins variés de nos clients en matière de gestion d'entreprise à Madagascar." 
                btnText="Rentrons en contact"
        />
        <div className="container-fluid py-5 px-0">
            <div className="p-0 m-0">
                <div className='container py-5'>
                    <div className="row d-flex justify-content-center py-5">
                        <div className="col d-none d-lg-block"></div>
                        <div className="col col-lg-8 d-flex  flex-column justify-content-center align-items-center">
                            <h5 className="card-title f-bold fs-3 axel-text-orange py-3">Soumission de formulaire de contact</h5>
                            <h2 className="axel-text-blue fs-2 fw-bolder text-center">Formulaire de contact Axcel soumis avec succès.</h2>
                            <div className="border border-info border-2 w-25 my-3"></div>
                            <p className='py-3 text-center'>Nous vous remercions pour votre soumission via notre formulaire de contact.<br></br>Les informations nécessaires à votre demande vous seront envoyées par email dans les plus brefs délais.<br></br>Nous vous invitons à consulter régulièrement votre boîte mail.<br></br><br></br></p>                       
                            
                        </div>
                        <div className="col d-none d-lg-block"></div>
                    </div>                                     
                    
                </div>
            </div>
        </div>  


    </>
  )
}