import meals from '../meals.json'


export default function DisplayMenu() {

    return(

        <div className=' container flex'>
            
            {meals.map((item, index) =>
                <div className='dish'>
                    <img src={item.imageSrc} alt="" />
                    <h2 key={index}>{item.title}</h2>
                    <span>{item.content}</span>
                    <span>{item.price}</span>
                </div>
            )}
            
        </div>
    )
}