import { Link } from "react-router-dom"

export default function Header(){
    return(
        <div className="container flex header">
            <div className="title">
                <h1>Découvrez notre</h1>
                <Link to="/"><h1>menu.</h1></Link>
            </div>
            <nav>
                <ul className="flex">
                    <li>Tout</li>
                    <li>Viandes</li>
                    <li>Legumes</li>
                </ul>
            </nav>
        </div>
    )
}