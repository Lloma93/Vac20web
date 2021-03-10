import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login'
import Home from './pages/Home'
import TalkToUsHelper from './pages/TalkToUsHelper'
import Cadastrar from './pages/Cadastrar'
import ConsultaHistorico from './pages/areaLogada/ConsultaHistorico'
import Selo from './pages/areaLogada/Selo'
import ValidaCliente from './pages/areaLogada/ValidaCliente'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/help" component={TalkToUsHelper} />
                <Route path="/cadastrar" component={Cadastrar} />
                <Route path="/historico" component={ConsultaHistorico} />
                <Route path="/selo" component={Selo} />
                <Route path="/cliente-status" component={ValidaCliente} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;