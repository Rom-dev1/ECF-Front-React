import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import meals from '../meals.json'
import { useEffect, useState } from "react"

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
                    <li>viandes</li>
                    <li>Legumes</li>
                </ul>
    
            </nav>
        </div>
    )
}