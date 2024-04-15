import { useEffect, useState } from 'react';
import Loading from './Loading';
import Typewriter from "typewriter-effect";

const HelpUs = () => {

    const [lista, setLista] = useState([])

    useEffect(() => {
        fetch('https://wedding-gifts-seven.vercel.app/api/tobuy')
        .then(res => res.json())
        .then(data => setLista(data))
    }, [])


    return ( 
        <div className="list-div">
            <div className="list-titles">
                <p className="list-main-title">Nos ajude!</p>
                <p className="list-span"><Typewriter options={{ strings: ['Presentes', 'Maria e João'],
                                                                autoStart: true,
                                                                loop: true}}/></p>
                
            </div>

            {(lista.length !== 0 && <div className="items-list">
                {lista.slice(0, 10).map((item) => (
                        <div className='items-each'> 
                            <div className='image-wrapper'><img src={item.image} alt="" /></div>
                            <p>{item.name}</p>
                            <a href={`/item/${item.id}`} className='link-buy'>Escolher item</a>
                        </div>
                    ))}
                </div>) || <Loading/>}
            <a className='redirect-list' href="/list" style={{marginBottom: '20px'}}>Lista Completa</a>
        </div>
     );
}

export default HelpUs;