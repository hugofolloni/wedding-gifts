const Header = () => {

    const redirectHome = () => {
        if(window.location.href !== 'http://localhost:3000/'){
            window.location.href = '/'  
        }
    }

    return ( 
        <div className="header-div">
            <a href="/list" className="header-a">Lista de Presentes</a>
            <h2 onClick={() => redirectHome()} className="header-title">DREAMDAY</h2>
            <a href="/#mural" className='header-a'>Mural de Fotos</a>
        </div>
     );
}
 
export default Header;