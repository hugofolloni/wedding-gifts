import { useState, useEffect } from 'react';
import Loading from './Loading';


const List = () => {

    const [lista, setLista] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:4000/api/gifts')
        .then(res => res.json())
        .then(data => {console.log(data); setLista(data)})
    }, [])

    return ( 
        <div className='items-wrapper'>
           {(lista.length !== 0 && <div className="items-list">
                {lista.map((item) =>               
                    <div className='items-each'> 
                        <div className='image-wrapper'><img src={item.image} alt="" /></div>
                        <p>{item.name}</p>
                        <a href={`/item/${item.id}`} className='link-buy'>Escolher item</a>
                    </div>                                
                )}
            </div>) ||<Loading /> }
            <div className="bottom-photos">
                <div className="line" />
                <span className="weeding-date">27/04/2024</span>
                <div className="line" />
            </div>
        </div>
     );
}
 
export default List;