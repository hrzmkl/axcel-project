import PageHero from '@/app/components/pageHero/pageHero'
import OtherService from '@/app/components/other-service/otherServics';
import React from "react";
export const metadata = {
  title: 'Devis - Axcel Company',  
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
                            <h2 className="axel-text-blue fs-2 fw-bolder text-center">Formulaire demande de devis</h2>
                            <div className="border border-info border-2 w-25 my-3"></div>
                            <p className='py-3'>Pour demander un devis concernant nos prestations et services, merci de remplir le formulaire ci-dessous.</p>
                        
                            
                        </div>
                        <div className="col d-none d-lg-block"></div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col'></div>
                        <div className='col-8 d-flex justify-content-center'>
                            <iframe width={600} height={950} src="https://fadc7ab0.sibforms.com/serve/MUIFABWdxhFndRDMk1lUH0M7Cc4wWYT-RcrRH7L2ipV9J345MDFZgGwShuLP-Joe_JDsqTRAVhjhYcQwHEkGS9TcOlRoUXXwFxCz9YHYywvojoNthyHmOO_I8bWMGYPisMjHYgdsU6o2MP1btwkE5ioYZm5fEBItPzJKIK2jL_4JW27_pXiYLOjStygcikVRFOlIW9-iLZF36HYN" ></iframe> 
                        </div>
                        <div className='col'></div>
                    </div>                    
                    
                </div>
            </div>
        </div>      
      
    </>
  );
}