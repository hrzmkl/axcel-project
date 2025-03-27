'use client'
import styles from '../../(pages)/page.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
interface AxelpageHeroProps {   
    desc:string;
    btnText:string;   
    imgSrc: string;    
  }
  function replaceAll(p:string, find:string, replace:string) {
    return p.replace(new RegExp(find, 'g'), replace);
} 

  export default function PageHero({imgSrc, desc, btnText }: AxelpageHeroProps) {  
    const metadata = {
        title: 'Services - Axcel company',  
      } 
    const path:string = usePathname()
    const str = path.replace('/', "")
    const pathname = str.replace(/-/g, " ")
    let title = pathname.charAt(0).toUpperCase() + pathname.slice(1);
      
    
    title = replaceAll(title,"Recuperation","Récupération")
    title = replaceAll(title,"Récupération diplome releve note equivalence","Récupération diplôme, relevé de note, équivalence")
    title = replaceAll(title,"Récupération traduction acte naissance acte de mariage","Récupération / traduction acte de naissance, acte de mariage")
    title = replaceAll(title,"creation","création")
    title = replaceAll(title,"Creation","Création")
    title = replaceAll(title,"consommabilite","consommabilité")
    title = replaceAll(title,"Ouverture succursale filiale","Ouverture succursale / filiale")
    title = replaceAll(title,"societe","société")
    title = replaceAll(title,"etablissement","établissement")
    title = replaceAll(title,"strategique","stratégique")
    title = replaceAll(title,"Formulaire demande création entreprise association ong","Formulaire de demande de création : entreprise, association, ONG")

    
    return(
        <>
            <div className={`${styles.hero} container`}>
              <div className="container py-5">
                    <div className="row justify-content-around px-3 align-items-center">   
                      <div className="col-sm-12 col-lg-6 py-5 ps-lg-5 axel-block1">
                                <div className="border-2 border-dark">
                                    <div>
                                        <img src={imgSrc} alt={title} className={`${styles.image} img-fluid`}/>
                                    </div>                                    
                                </div>                                                     
                        </div>                     
                        <div className="col-sm-12 col-lg-6 p-auto pe-lg-5">
                            <div className="d-flex flex-column mb-3">
                                <h3 className="axel-text-orange fs-3 fw-bolder"><Link target="_blank" href="/" className="text-white">Accueil</Link> &gt;&gt;&gt; <span>{title}</span></h3>                            
                                <h1 className="text-white fw-bolder pt-3">{title}</h1>
                                <div className="border border-info border-2 w-25 my-3"></div>   
                                <p className='text-white py-3'>{desc}</p>                        
                                                   
                            </div>   
                            <div className='d-block py-4 py-lg-5'>
                                <a target="_blank" href="/contact" type="button" className="btn btn-info text-white">{btnText}</a>
                            </div>                          
                        </div>                                           
                        
                    </div>
                </div>
            </div>     
        
        </>
    )
}
