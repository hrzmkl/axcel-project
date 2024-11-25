export default function NavBar(){
    return(
        <>
           <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                <ul className="nav  d-flex">
                    <li className="nav-item"><a href="#" className="nav-link link-dark px-2 active" aria-current="page">Accueil</a></li>
                    <li className="nav-item"><a href="#" className="nav-link link-dark px-2">A propos</a></li>
                    <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Création</a></li>
                    <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Contact</a></li>
                </ul>
                
                </div>
            </nav> 
        </>
    );
}