"use client";

import { useEffect } from "react";

export default function AddJsCarousel()
{
    useEffect(()=>{
        require("bootstrap/js/dist/carousel.js")        
    },[])
    return <></>
}