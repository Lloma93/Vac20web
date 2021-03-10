import React, { useState, useEffect } from 'react';
import Rodape from '../components/Rodape'
import Menu from '../components/Menu'
import Card from '../components/Card'
import { Link } from 'react-router-dom';

function Home () {

    return(
        <div className="dark">
        <Menu />
        <h1>home</h1>
        <Card /> #selo   <Link to="/selo" className="">selo</Link>
        <Card /> validar cliente <Link to="/cliente-status" className="">cliente checar</Link>
        <Card /> #checar histórico <Link to="/historico" className="">consulta historico</Link>

        
        <footer>
            <Rodape />
        </footer>
        </div>
    )
}

export default Home;