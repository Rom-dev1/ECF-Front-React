import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import meals from '../meals.json'
import { Link } from "react-router-dom"
import App from "../App"
export default function Meat(){
    
    let params = useParams()
    let [meat, setMeat] = useState([])
    let feetmenu =() => {
        let meat = meals.filter(meat => meat.type.length < 5)
        setMeat(meat)
        console.log(meat)
    }

    useEffect(() => feetmenu(), [])
    return(
       <>
            <App/>
            <div className='container flex'>
                {meat.map((item, index) =>
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