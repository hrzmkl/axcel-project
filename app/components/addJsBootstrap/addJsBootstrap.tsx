"use client";

import { useEffect } from "react";

export default function AddJsBootstrap()
{
    useEffect(()=>{
        import( "bootstrap/dist/js/bootstrap.bundle.js")        
    },[])
    return <></>
}