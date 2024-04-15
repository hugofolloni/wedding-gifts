import {useState} from 'react';
import md5 from 'md5';

const Login = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const tryLogin = () => {
        if(username === 'admin' && password === 'admin'){
            localStorage.setItem('username', username);
            localStorage.setItem('password', md5(password));
            window.location.href = '/admin'
        }
        else {
            alert("Usuário ou senha incorretos!");
            setUsername("")
            setPassword("")
        }
    }

    return ( 
        <div className="login-div">
            <div className="login-container">
                <h3>Login de administrador</h3>
                <div className="inputs">
                    <input className="login-input" placeholder="Usuário" type="text" value={ username } onChange={(e) => setUsername(e.target.value)} />
                    <input className="login-input" placeholder="Senha" type="password" value={ password } onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button onClick={() => tryLogin()}>Entrar</button>
            </div>
            <p>Caso não tenha acesso, contate os administradores.</p>
        </div>
     );
}
 
export default Login;