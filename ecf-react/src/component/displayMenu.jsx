import { useState } from 'react'
import meals from '../meals.json'
import OrderSucess from './orderSucess'
import App from '../App'

export default function DisplayMenu() {

    let [hover, setHover] = useState("")

    const addHover = () => {
        hover = "hover"
        setHover(hover)
        console.log('coucou')
    }

   

    return(
    <>   
        <App/>
        <div className='container flex'>
            
            {meals.map((item, index) =>
                <div className='dish'>
                    <img src={item.imageSrc} alt="" />
                    <span id='hide' onClick={<OrderSucess/>}>Commander</span>
                    <h2 key={index}>{item.title}</h2>
                    <span>{item.content}</span>
                    <span>{item.price}</span>
                </div>
            )}
            
        </div>
    </> 
    )
}