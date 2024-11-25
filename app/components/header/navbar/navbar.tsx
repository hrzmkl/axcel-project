export default function NavBar(){
    return(
        <>
           <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                <ul className="nav  d-flex">
                    <li className="nav-item"><a href="#" className="nav-link link-dark px-2 active" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link link-dark px-2">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link link-dark px-2">About</a></li>
                </ul>
                
                </div>
            </nav> 
        </>
    );
}