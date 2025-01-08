import { useEffect, useState } from 'react'
import { Loading } from './Loading'
import {QRCodeSVG} from 'qrcode.react';

const Item = () => {
    
    const [clickConfirm, setClickConfirm] = useState(false)
    const [pixContainer, setPixContainer] = useState(false)

    const [costumerName, setCostumerName] = useState('')

    const [itemName, setItemName] = useState("")
    const [itemPrice, setItemPrice] = useState("")

    const [itemImage, setItemImage] = useState(null);

    const [pixCode, setPixCode] = useState('')
    const [pixAvailable, setPixAvailable] = useState(false)


    const confirmItemForClient = () => {
        const id = window.location.href.split('item/')[1]
        setClickConfirm(false);
        setPixContainer(true);
        fetch(`https://wedding-gifts-seven.vercel.app/api/buyer`, { // https://wedding-api-zeta.vercel.app  --- https://wedding-api-zeta.vercel.app
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',                                                              
            body: JSON.stringify( { buyer: costumerName, item: id, confirm: 0, amount: itemPrice} )  
        })
        .then(res => res.json())
        .then(data => {
            const pix = data.code;
            setPixCode(pix)
        })
        .then(() => setPixAvailable(true))
    
    }

    useEffect(() => {
        const id = window.location.href.split('item/')[1]
        fetch(`https://wedding-gifts-seven.vercel.app
/api/gifts/${id}`)
        .then(res => res.json())
        .then(data => {
            const infos = data[0]
            setItemName(infos.name)
            setItemPrice(infos.price)
            setItemImage(infos.image)
        })
    }, [])

    return ( 
        <div className="items-wrapper">
            {(itemImage !== null && (
                  <div className="container">
                    <div className='bola'></div>
                    <div className='bola2'></div>
                  <div className="left-container">
                          <img src={itemImage} alt="" />
                  </div>
                  <div className="right-container">
                      <p className='item-name'>{itemName.toUpperCase()}</p>
                      <div className="price-div">
                          <p className='price'> R$ {itemPrice},00</p>
                          <button onClick={() => setClickConfirm(true)}>Comprar</button>
                      </div>
                  </div>
              </div>
            )) || <Loading />}
            
            {clickConfirm && (
                <div className='confirm-div'>
                    <div className='dark-background' onClick={() => setClickConfirm(false)}/>
                    <div className="confirm-container">
                        <input type="text" placeholder='Presente dado por:' value={ costumerName } onChange={(e) => setCostumerName(e.target.value)} />
                        <button onClick={() => confirmItemForClient()}>Confirmar</button>
                    </div>
                </div>
            )}

            {pixContainer && (
                <div className='confirm-div'>
                    <div className='dark-background' onClick={() => setPixContainer(false)}/>
                    <div className="pix-container">
                        { (pixAvailable && (
                            <div className='pix-wrapper'>
                                 <p className='pix-header'>Código Pix para transferência</p>
                                <QRCodeSVG size='256' value={pixCode}  />
                                <div className='pix-text-wrapper'>
                                    <span>Clique no código para copiá-lo</span>
                                    <div onClick={() => {navigator.clipboard.writeText(pixCode)}} className='pix-box'>{pixCode}</div>
                                </div>
                            </div>
                        )) || <Waiting/> }
                    </div>
                </div>
            )}

            <div className="bottom-photos">
                <div className="line" />
                <span className="weeding-date">27/04/2024</span>
                <div className="line" />
            </div>
        </div>

        
     );
}

const Waiting = () => {
    return (
        <div className="loading">
            Gerando QR Code...
        </div>
    )
}
 
export default Item;