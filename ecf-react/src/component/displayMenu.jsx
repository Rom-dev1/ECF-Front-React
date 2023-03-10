
import meal from '../meals.json'
import App from '../App'
import { Link } from 'react-router-dom'

export default function DisplayMenu() {

    return(
    <>   
        <App/>
        <div className='container flex'>
            
            {meal.map((item, index) =>
                <div key={index} className='dish'>
                    <div id='img'>
                        <img src={item.imageSrc} alt="" />
                        <div className='rating'>
                            <svg fill="orange" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                            <span id='rating'>{item.rating}</span>
                            <span id='reviews'>({item.reviews})</span>
                        </div>
                    </div>
                    
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