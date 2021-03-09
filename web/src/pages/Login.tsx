import React, { useEffect, useState } from 'react';
import '../styles/pages/login.css';
import login01 from '../assets/images/login01.svg'
import { Link } from 'react-router-dom'
import api from '../services/api'
import { useHistory } from "react-router-dom";

function Login() {

    const history = useHistory();

    const [callAPI, setCallAPI] = useState('')
    const [logon, setLogon] = useState({ username: '', password: '' })
    const [disabledButton, setDisabledButton] = useState(true)

    var checkImput = (value: any) => {
        if (value !== undefined && value !== '') return true
    }

    var handleChangeLogin = (event: { target: { value: any; }; }) => {
        setLogon({ username: event.target.value, password: logon.password });
        if (checkImput(logon.password)&& checkImput(logon.password)) {setDisabledButton(false)}
    }

    var handleChangePassword = (event: { target: { value: any; }; }) => {
        setLogon({ username: logon.username, password: event.target.value });
        if (checkImput(logon.password)&& checkImput(logon.password)) {setDisabledButton(false)}
    }

    var handleSubmit = () => {
        console.log('logon', logon)

        api.post('login', logon).then(response => {
            console.log(response)
            console.log(response?.data?.token)
            console.log(response.status)

            if (response.status === 200 && response.data.token !== '' &&
                response.data.token !== undefined && response) {
                localStorage.setItem('@token', response?.data?.token)

                // remove token local 
                // localStorage.removeItem('@token')

                // capturatoken
                // const token = localStorage.getItem('@token');

                history.push('home');
            } else {
                // tratar erros
                // erro da API
            }
        })



    }

    return (
        <div id="login-page">
            <div className="content-wrapper">
                <h1> eVac20</h1>
                <img src={login01} alt="img" />
                <label>Login:</label>
                <input type="text" id="login" onChange={handleChangeLogin}></input>
                <label>Senha:</label>
                <input type="password" id="senha" onChange={handleChangePassword}></input>
                <button className="button-password" onClick={handleSubmit} disabled={disabledButton}>Logar</button>
               <div className="mt">                   
                <p>Esqueceu seu login? < p />
                    <Link to="/help" className="recovery-password">
                        Recuperar a senha
                </Link>
                </p>
               </div>

            </div>
        </div>
    );
}

export default Login;