"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const CountUp = dynamic(() => import("react-countup"), { ssr: false });

export default function Counter() {
    const [ref1, inView1] = useInView({ threshold: 0.5 });
    const [ref2, inView2] = useInView({ threshold: 0.5 });
    const [ref3, inView3] = useInView({ threshold: 0.5 });

    const [start1, setStart1] = useState(false);
    const [start2, setStart2] = useState(false);
    const [start3, setStart3] = useState(false);

    // Chaque fois que l'élément est en vue, on redémarre le compteur
    useEffect(() => {
        if (inView1) {
            setStart1(false);
            setTimeout(() => setStart1(true), 100); // petit délai pour reset
        }
    }, [inView1]);

    useEffect(() => {
        if (inView2) {
            setStart2(false);
            setTimeout(() => setStart2(true), 100);
        }
    }, [inView2]);

    useEffect(() => {
        if (inView3) {
            setStart3(false);
            setTimeout(() => setStart3(true), 100);
        }
    }, [inView3]);

    return (
        <div className="container-fluid bg-primary py-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {/* Bloc 1 */}
                    <div className="col" ref={ref1}>
                        <div className="card axel-box h-100">
                            <div className="card-body text-center">
                                <h5 className="card-title text-primary fs-1 fw-bolder">
                                    {start1 && <CountUp start={0} end={1061} duration={1} separator=" " />} +
                                </h5>
                                <p className="card-text">Projets complétés</p>
                            </div>
                        </div>
                    </div>

                    {/* Bloc 2 */}
                    <div className="col" ref={ref2}>
                        <div className="card axel-box h-100">
                            <div className="card-body text-center">
                                <h3 className="card-title text-primary fs-1 fw-bolder">
                                    {start2 && <CountUp start={0} end={3600} duration={1} separator=" " />} +
                                </h3>
                                <p className="card-text">Clients satisfaits</p>
                            </div>
                        </div>
                    </div>

                    {/* Bloc 3 */}
                    <div className="col" ref={ref3}>
                        <div className="card axel-box h-100">
                            <div className="card-body text-center">
                                <h5 className="card-title text-primary fs-1 fw-bolder">
                                    {start3 && <CountUp start={0} end={1021} duration={1} separator=" " />} +
                                </h5>
                                <p className="card-text">Reconnaissances</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
