import { Link } from "react-router-dom"

export default function Header(){
  
    return(
        <div className="container flex header">
            <div className="title">
                <h1>Découvrez notre</h1>
                <h1>menu.</h1>
            </div>
            <nav>
                <ul className="flex">
                    <Link to="/" id="link"><li>Tout</li></Link>
                    <Link to="/repas/viande" id="link"><li>viandes</li></Link>
                    <Link to="/vege/legumes" id="link"><li>Legumes</li></Link>
                </ul>
    
            </nav>
        </div>
    )
}