import { CheckCircleIcon } from '@heroicons/react/24/solid';
export default function aboutSection(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-m-12 col-lg-6 p-0">
                        <img src="/about-section.jpg" alt="A propos" className="img-fluid"/>
                    </div>
                    <div className="col-m-12 col-lg-6">
                        <div className="d-flex flex-column p-5">
                            <h3 className="text-primary fs-5">A propos de nous</h3>
                            <h2 className="axel-text-blue fs-2 fw-bolder">Créez votre société en toute sérénité, nous nous occupons de tout</h2>
                            <p>Axcel Company est une société dédiée à fournir des services professionnels aux entreprises. Nous accompagnons depuis 2022 les entrepreneurs, les investisseurs dans la formalisation de leurs entreprises.</p>
                            <div className="axel-box d-flex">
                                <div className="axel-box-icon">
                                    <CheckCircleIcon/>
                                </div>
                                <div className="axel-box-content">
                                    <p>Nous assistons les étrangers envisageant d’investir à Madagascar.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}