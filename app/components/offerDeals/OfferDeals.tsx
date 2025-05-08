import {CheckCircleIcon} from "@heroicons/react/20/solid";
import styles from "@/app/(pages)/page.module.css";
import React from "react";

export default function OfferDeals(){
	return(
		<>
			<div className="container">
				<div className="container pt-5">
					<div className="row justify-content-around px-3 align-items-center">
						<div className="col-sm-12 col-lg-6 py-5 ps-lg-5 axel-block1">
							<div className="border-2 border-dark">
								<div>
									<img src="/service/contact1.png" alt="prise en main" className="img-fluid"/>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-lg-6 p-auto pe-lg-5">
							<div className="d-flex flex-column mb-3">
								<h3 className="axel-text-orange fs-3 fw-bolder">Nous vous offrons</h3>
								<h2 className="axel-text-blue fw-bolder pt-3">Services professionnels aux entreprises</h2>
								<div className="border border-info border-2 w-25 my-3"></div>
								<p className='py-3'>Nous accompagnons  les entrepreneurs, les investisseurs dans la formalisation de leurs entreprises.</p>
								<div className="row row-cols-1 row-cols-md-2 g-5 mt-lg-2">
									<div className="col">
										<div className="card mb-3 h-100 border-0">
											<div className="row g-0">
												<div className="col-1">
													<CheckCircleIcon className={`${styles.icon} text-info fw-bolder`} />
												</div>
												<div className="col-11">
													<div className="card-body p-0 ps-2">
														<h4 className="card-title text-info">Conseil et assistance</h4>

														<p className="card-text"><small>Choix stratégique, prise de décision</small></p>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="col">
										<div className="card mb-3 h-100 border-0">
											<div className="row g-0">
												<div className="col-1">
													<CheckCircleIcon className={`${styles.icon} text-info fw-bolder`} />
												</div>
												<div className="col-11">
													<div className="card-body p-0 ps-2">
														<h4 className="card-title text-info">Création d'entreprise</h4>
														<p className="card-text"><small>EI / SARLU / Sarl</small></p>

													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="card mb-3 h-100 border-0">
											<div className="row g-0">
												<div className="col-1">
													<CheckCircleIcon className={`${styles.icon} text-info fw-bolder`} />
												</div>
												<div className="col-11">
													<div className="card-body p-0 ps-2">
														<h4 className="card-title text-info">Accompagnement</h4>

														<p className="card-text"><small>Lors de la création, business model, développement</small></p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="card mb-3 h-100 border-0">
											<div className="row g-0">
												<div className="col-1">
													<CheckCircleIcon className={`${styles.icon} text-info fw-bolder`} />
												</div>
												<div className="col-11">
													<div className="card-body p-0 ps-2">
														<h4 className="card-title text-info">Coursier administratif </h4>
														<p><small className="card-text">Livraisons administratives immédiates ou programmées</small></p>
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}