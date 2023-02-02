import { useState } from 'react'
import meals from '../meals.json'


export default function DisplayMenu() {

    let [hover, setHover] = useState("")

    const addHover = () => {
        hover = "hover"
        setHover(hover)
        console.log('coucou')
    }

   

    return(

        <div className='container flex'>
            
            {meals.map((item, index) =>
                <div className='dish'>
                    <img src={item.imageSrc} alt="" />
                    <span id='hide' onClick={addHover}>Commander</span>
                    <h2 key={index}>{item.title}</h2>
                    <span>{item.content}</span>
                    <span>{item.price}</span>
                </div>
            )}
            
        </div>
    )
}