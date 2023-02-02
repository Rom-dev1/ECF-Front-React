import { useState } from 'react'
import meals from '../meals.json'
import OrderSucess from './orderSucess'
import App from '../App'
import { Link, useParams } from 'react-router-dom'

export default function DisplayMenu() {

    let params =useParams()

    const order = () => {
        
        console.log('coucou')
    }

   

    return(
    <>   
        <App/>
        <div className='container flex'>
            
            {meals.map((item, index) =>
                <div className='dish'>
                    <img src={item.imageSrc} alt="" />
                    <Link to={`/commande/${item.title}`}><span id='hide' onClick={order}>Commander</span></Link>
                    <h2 key={index}>{item.title}</h2>
                    <span>{item.content}</span>
                    <span>{item.price}</span>
                </div>
            )}
            
        </div>
    </> 
    )
}