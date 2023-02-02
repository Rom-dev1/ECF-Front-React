import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import meals from '../meals.json'
import App from "../App"

export default function OrderSucess(){
    let params = useParams()
    let [dish, setDish] = useState([])
    let feetmenu =() => {
        let dish = meals.find(dish => dish.title === params.title)
        setDish(dish)
        console.log(dish)
    }

    useEffect(() => feetmenu(), [])

    return(
       <>
           <App />
           <div className="contentOrderSucess flex">
              <h1 id="titleOrder">Vous avez commandé le repas {dish.title}</h1>
              <img src={dish.imageSrc}/>
           </div>
       </>
        
    )

}