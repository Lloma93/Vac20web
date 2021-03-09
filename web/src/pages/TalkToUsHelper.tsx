import React from 'react';
import { Link } from 'react-router-dom';
import help from '../assets/images/help.svg'
import '../styles/pages/login.css';

function TalkToUsHelper() {
    return (
        <div id="login-page">
            <div className="content-wrapper">

            <h1>Precisa de Ajuda?</h1>
            <p /><p />
            <img src={help} alt="help" />
            <p /><p />
            <h2 className="bold"> <span className="material-icons md-24">face</span> Entre em contato conosco</h2>
            
            <p> SAC eVac20@sac-Vac20.com.br</p>
            <p> e-mail: meAjuda@vac20.com.br</p>
            <p> SP capital (11) 1234-5678</p>
            <p> Demais localidades (0800) 9874-6321</p>
            <p /><p />
            <Link to="" className="">
               Voltar
            </Link>
            </div>
        </div>
    );
}

export default TalkToUsHelper;