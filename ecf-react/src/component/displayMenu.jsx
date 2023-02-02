
import meals from '../meals.json'
import App from '../App'
import { Link } from 'react-router-dom'

export default function DisplayMenu() {

    return(
    <>   
        <App/>
        <div className='container flex'>
            
            {meals.map((item, index) =>
                <div key={index} className='dish'>
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