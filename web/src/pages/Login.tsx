import React, { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import '../styles/pages/login.css';
import login01 from '../assets/images/login01.svg'
import logo from '../assets/logo/Logo_EVAC_Sem_Background.png'
import { Link } from 'react-router-dom'
import api from '../services/api'
import { useHistory } from "react-router-dom";

function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Login() {
    const history = useHistory();
    const [logon, setLogon] = useState({ username: '', password: '' })
    const [disabledButton, setDisabledButton] = useState(true)
    const [open, setOpen] = useState(false);
    const [error, setError] = useState('');
    const [messageError, setMessageError] = useState('');

    var checkImput = (value: any) => {
        if (value !== undefined && value !== '') return true
    }

    var handleChangeLogin = (event: { target: { value: any; }; }) => {
        setLogon({ username: event.target.value, password: logon.password });
        if (checkImput(logon.password) && checkImput(logon.password)) { setDisabledButton(false) }
    }

    var handleChangePassword = (event: { target: { value: any; }; }) => {
        setLogon({ username: logon.username, password: event.target.value });
        if (checkImput(logon.password) && checkImput(logon.password)) { setDisabledButton(false) }
    }

    var handleClose = () => {
        if (error !== '' || error !== undefined) {
            setError('')
        }
        setOpen(false);
    };

    var handleSubmit = () => {

        api.post('login', logon).then(response => {

            if (response.status === 200 && response.data.token !== '' &&
                response.data.token !== undefined && response) {
                localStorage.setItem('@token', response?.data?.token)

                // remove token local 
                // localStorage.removeItem('@token')

                // capturatoken
                // const token = localStorage.getItem('@token');

                history.push('home');
            } else {
                setOpen(true);
                setMessageError(response.data.message)
            }
        })
    }

    return (
        <div id="login-page">
            <div className="content-wrapper">
                <div className="divPequenas">


                    <div className="divPequenas">

                        
                        <img src={logo} alt="img" width="300px"/>

                    </div>
                    <div className="mobilelogo">

                        <h1> eVac20 Parceiros </h1>
                        
                        <img src={login01} alt="img" />
                    </div>
                    <div className="mobile">
                        <label>Login:</label>
                        <input type="text" id="login" onChange={handleChangeLogin} ></input>
                        <label>Senha:</label>
                        <input type="password" id="senha" onChange={handleChangePassword}></input>
                        <button className="button-password" onClick={handleSubmit} disabled={disabledButton}>Logar</button>
                        <div >
                            <p>Esqueceu seu login? < p />
                                <Link to="/help" className="recovery-password">
                                    Recuperar a senha</Link>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {messageError}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Login;