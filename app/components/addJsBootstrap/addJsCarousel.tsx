"use client";

import { useEffect } from "react";

export default function AddJsCarousel()
{
    useEffect(()=>{
        import( "bootstrap/js/dist/carousel.js")        
    },[])
    return <></>
}