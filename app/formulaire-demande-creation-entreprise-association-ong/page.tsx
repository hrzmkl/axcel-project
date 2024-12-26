import PageHero from '@/app/components/pageHero/pageHero';
import React from "react";
export const metadata = {
  title: 'Devis - Axcel company',  
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
                            <h5 className="card-title f-bold fs-3 axel-text-orange py-3">Plan et tarifs</h5>
                            <h2 className="axel-text-blue fs-2 fw-bolder text-center">Formulaire demande de création
                            Entreprise, Association, ONG</h2>
                            <div className="border border-info border-2 w-25 my-3"></div>
                            <p className='py-3'>Pour une demande de création d'entreprise, association ou ONG, veuillez remplir le formulaire ci-dessous</p>
                        
                            
                        </div>
                        <div className="col d-none d-lg-block"></div>
                    </div>

                    <div className='row'>
                        <div className='col'></div>
                        <div className='col-8'>
                            <iframe width="900" height="1100" className="brevoIfram" src="https://fadc7ab0.sibforms.com/serve/MUIFANNJuJn9vQWc6RIWZk0hnDegaGrsI4U2YYlqOc_lIm72nvsa-UoSKdfu0O7DJB2-N1KIdStIskGYhZ3Mod4s0YQFYw0AXww5ZPCcB2OgWk6Ovoyhx1h00n_KAuHfQ067mHu6dO8_qFonNN2ahlYyuucs2Btz1GuadE3p_I3WaGntfZK5MN-sNaOuLzqwpUcXIIvwlYHzlpjL" frameborder="0" scrolling="auto" allowfullscreen="allowfullscreen"></iframe>
                        </div>
                        <div className='col'></div>
                    </div>
                    
                    
                </div>
            </div>
        </div>      
      
    </>
  );
}