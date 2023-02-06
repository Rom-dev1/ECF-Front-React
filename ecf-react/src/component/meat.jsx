import { useEffect, useState } from "react"
import meals from '../meals.json'
import { Link } from "react-router-dom"
import App from "../App"
export default function Meat(){
    
    let [meal, setMeat] = useState([])
    let feetmenu =() => {
        let meal = meals.filter(meal => meal.type === "meat")
        setMeat(meal)
        console.log("cocuou")
    }

    useEffect(() => feetmenu(), [])
    return(
       <>
            <App/>
            <div className='container flex'>
                {meal.map((item, index) =>
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