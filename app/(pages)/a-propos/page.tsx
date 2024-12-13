export const metadata = {
  title: 'A propos - Axcel company',  
}

export default function Page() {
    
  return (
    <>
      
      <div className="container">
      <div className="container my-lg-5 py-5">
                    <div className="row justify-content-around px-3 align-items-center">   
                                       
                        <div className="col-sm-12 col-lg-6 p-auto pe-lg-5">
                            <div className="d-flex flex-column mb-3">
                                <h3 className="axel-text-orange fs-3 fw-bolder">A propos de Axcel Company</h3>                            
                                <h2 className="text-white fw-bolder pt-3">Société de conseil et d'assistance</h2>
                                <div className="border border-info border-2 w-25 my-3"></div>   
                                <p className='text-white py-3'>En plus du conseil et de l'assistance administrative, nous proposons une gamme de services complets pour répondre aux besoins variés de nos clients en matière de gestion d'entreprise à Madagascar.</p>                        
                                                   
                            </div>   
                            <div className='d-block py-4 py-lg-4'>
                                <button type="button" className="btn btn-info text-white">En savoir plus</button>
                            </div>                          
                        </div>
                        <div className="col-sm-12 col-lg-6 py-5 ps-lg-5 axel-block1">
                                <div className="border-2 border-dark">
                                    <div>
                                        <img src="/axcel-company-societe.png" alt="prise en main" className="img-fluid"/>
                                    </div>                                    
                                </div>                                                     
                        </div>                                              
                        
                    </div>
            </div>
      </div>
      
    </>
  );
}