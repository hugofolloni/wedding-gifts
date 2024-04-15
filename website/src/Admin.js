import { useEffect, useState } from "react"
import Loading from "./Loading"
import md5 from 'md5';

const Admin = () => {

    const [buys, setBuys] = useState([])
    const [gifts, setGifts] = useState([])

    useEffect(() => {
        if(localStorage.getItem('username') === "admin" && localStorage.getItem("password") === md5("admin")){
            fetch(`https://wedding-gifts-seven.vercel.app
/api/admin/`)
            .then(res => res.json())
            .then(data => {
                setBuys(data)
            })
            fetch(`https://wedding-gifts-seven.vercel.app
/api/gifts/`)
            .then(res => res.json())
            .then(data => {
                setGifts(data)
            })
        }
        else {
            window.location.href = "/admin-login"
        }
    }, [])
    
    return (
        <div className="admin-wrapper">
            <div className="admin-line">
                <AdminCreate/>
                {(gifts.length !== 0 &&  <AdminList data = {gifts}/> ) || <Loading/> }
            </div>
            {(buys.length !== 0 &&  <AdminBuys data = {buys}/> ) || <Loading/> }
        </div>
    )
}

const AdminCreate = () => {
    const [itemName, setItemName] = useState('')
    const [itemPrice, setItemPrice] = useState(0)
    const [itemImage, setItemImage] = useState('')

    const addItem = () => {
        if(itemName === "") return 
        fetch(`https://wedding-gifts-seven.vercel.app
/api/gifts`, { // https://wedding-api-zeta.vercel.app  --- https://wedding-api-zeta.vercel.app
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',                                                              
                body: JSON.stringify( { name: itemName, price: itemPrice, image: itemImage} )  
            })
        .then(res => res.json())
    }

    return (
        <div className="admin-line-wrapper">
            <div className="add-container">
                <h3>Adicionar item</h3>
                <div className="inputs">
                    <input className="login-input" placeholder="Nome" type="text" value={ itemName } onChange={(e) => setItemName(e.target.value)} />
                    <input className="login-input" placeholder="Preço" type="number" value={ itemPrice } onChange={(e) => setItemPrice(e.target.value)} />
                    <input className="login-input" placeholder="Imagem" type="text" value={ itemImage } onChange={(e) => setItemImage(e.target.value)} />
                </div>
                <button onClick={() => addItem()}>Entrar</button>
            </div>
        </div>
    )
}

const AdminList = (props) => {
    const gifts = props.data;

    const [confirmContainer, setConfirmContainer] = useState(false)
    const [watchItem, setWatchItem] = useState()


    const setConfirm = () => {
        console.log(watchItem.id)
        fetch(`https://wedding-gifts-seven.vercel.app
/api/gifts/${watchItem.id}` , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: 'DELETE'
        })
        setConfirmContainer(false)
    }


    return ( 
        <div className="admin-listing">
                <div className="admin-div-gifts">
                    {gifts.map((item) => (
                        <div className="admin-single-gift"> 
                            <img src={item.image} height='80%' alt="" />
                            <p>{item.name}</p>
                            <button className='delete-button' onClick={() => {setConfirmContainer(true); setWatchItem(item)}}>🗑️</button>
                        </div>
                    ))}
                </div>

            {confirmContainer && (
                <div className='confirm-div'>
                    <div className='dark-background-right' onClick={() => setConfirmContainer(false)}/>
                    <div className="admin-confirm-container-right">
                        <div className="admin-texts-wrapper">
                            <p>Você deseja deletar o item item {watchItem.name}?</p>
                            <p>Essa ação não poderá ser desfeita.</p>
                        </div>
                        <button onClick={() => setConfirm()}>Confirmar</button>
                    </div>
                </div>
            )}
        </div>
     );

}

const AdminBuys = (props) => {

    const items = props.data

    const [confirmContainer, setConfirmContainer] = useState(false)
    const [watchItem, setWatchItem] = useState()
    const [watchItemIndex, setWatchItemIndex] = useState()

    const setConfirm = () => {
        console.log(watchItem.buy_id)
        fetch(`https://wedding-gifts-seven.vercel.app
/api/buyers/${watchItem.buy_id}` , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: 'PATCH',                                                              
              body: JSON.stringify( { id: watchItem.buy_id } )  
        })
        setConfirmContainer(false)
        items[watchItemIndex].confirm = 1;
    }

    return ( 
        <div className="admin-buyers-wrapper">
                <div className="admin-buyers-div">
                    {items.map((item, index) => (
                        <div className="admin-item"> 
                            <div className="admin-item-wrapper">
                                <img src={item.image} height='80%' alt="" />
                                <p>{item.name}</p>
                            </div>
                            <p className="admin-item-buyer">{item.buyer}</p>
                            {
                                (!item.confirm &&
                                <button onClick={() => {setConfirmContainer(true); setWatchItem(item); setWatchItemIndex(index)}}>Confirmar</button>)
                                ||
                                <div className="checked-item">Confirmado</div>
                            }
                        </div>
                    ))}
                </div>

            {confirmContainer && (
                <div className='confirm-div2'>
                    <div className='dark-background' onClick={() => setConfirmContainer(false)}/>
                    <div className="admin-confirm-container">
                        <div className="admin-texts-wrapper">
                            <p>Você deseja confirmar que {watchItem.buyer} fez o pagamento do item {watchItem.name}?</p>
                            <p>Essa ação não poderá ser desfeita.</p>
                        </div>
                        <button onClick={() => setConfirm()}>Confirmar</button>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default Admin;