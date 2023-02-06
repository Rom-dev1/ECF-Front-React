import { useEffect, useState, useParams } from "react"
import meals from '../meals.json'

import { Link } from "react-router-dom"
import App from "../App"
export default function Vegetable(){

    let [vegetable, setVegetable] = useState([])
    let feetmenu =() => {
        let vegetable = meals.filter(vegetable => vegetable.type == "flower")
        setVegetable(vegetable)
    }

    useEffect(() => feetmenu(), [])
    return(
       <>
            <App/>
            <div className='container flex'>
                {vegetable.map((item, index) =>
                    <div className='dish'>
                        <img src={item.imageSrc} alt="" />
                        <Link to={`/commande/${item.title}`}><span id='hide'>Commander</span></Link>
                        <h2 key={index}>{item.title}</h2>
                        <span>{item.content}</span>
                        <span>{item.price}</span>
                    </div>
                )}
            </div>
       </>
    )
}