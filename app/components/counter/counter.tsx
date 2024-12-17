"use client"
import React from "react";
import CountUp from "react-countup";
export default function counter(){
    return(
        <>
            <div className='container-fluid bg-primary py-5'>
                <div className='container'>
                    <div className='row row row-cols-1 row-cols-md-3 g-4'>                       
                        <div className="col">
                            <div className="card axel-box h-100 ">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-primary fs-1 fw-bolder">
                                        <CountUp
                                            start={0}
                                            end={61}
                                            duration={1}
                                        /> +
                                    </h5>
                                    <p className="card-text">Projets complétés</p>
                                
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card axel-box h-100">
                                <div className="card-body text-center">
                                    <h3 className="card-title text-primary fs-1 fw-bolder">
                                        <CountUp
                                            start={0}
                                            end={40}
                                            duration={1}
                                        /> +
                                    </h3>
                                    <p className="card-text">Clients satisfait
                                    </p>
                                
                                </div>
                            </div>
                        </div>    
                        <div className="col">
                            <div className="card axel-box h-100">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-primary fs-1 fw-bolder">
                                        <CountUp
                                            start={0}
                                            end={7}
                                            duration={1}
                                        /> +
                                    </h5>
                                    <p className="card-text">Reconnaissances</p>
                                
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        
        </>
    )
}