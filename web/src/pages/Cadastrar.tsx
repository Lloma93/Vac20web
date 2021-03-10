import React, { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import '../styles/pages/cadastrar.css';
import clients from '../assets/images/clients.svg'
import logo from '../assets/logo/logopng.png'
import { Link } from 'react-router-dom'
import api from '../services/api'
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import { useForm } from "react-hook-form";

function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '18ch',
            },
        },
    }),
);

function Cadastrar() {
    const classes = useStyles();

    const history = useHistory();
    const [form, setForm] = useState(
        {
            name: '',
            cnpj: "",
            password: "",
            description: "",
            addressStreet: "",
            addressNumber: 0,
            addressComplement: "",
            addressCity: "",
            addressState: "",
            addressCountry: "",
            addressCode: ""
        })
    const [open, setOpen] = useState(false);
    const [error, setError] = useState('');
    const [messageError, setMessageError] = useState('');

    const onSubmit = (data: any) => console.log(data);

    var checkImput = (value: any) => {
        if (value !== undefined && value !== '') return true
    }

    var handleClose = () => {
        if (error !== '' || error !== undefined) {
            setError('')
        }
        setOpen(false);
    };

    var handleSubmit = (dados: any) => {
        console.log('dados', dados)
        api.post('/business').then(response => {

            if (response.status === 200 && response.data.token !== '' &&
                response.data.token !== undefined && response) {

            } else {
                setOpen(true);
                setMessageError(response.data.message)
            }
        })
    }

    return (
        <div id="cadastrar-page">
            <div >
                <div className="container">
                    <div className="content">
                        <h1> eVac20 </h1>

                        <img src={clients} alt="img" width="80%" />

                    </div>
                    <div className="content">
                        <p>Complete o seu cadastro e faça parte dos nossos clientes.</p>
                        <img src={logo} alt="img" width="25%" />

                        <form noValidate autoComplete="off">
                            <div className="content-form">
                                <div className="coluna">
                                    <TextField id="nameBusiness" label="Nome" />
                                    <TextField id="cnpj" label="CNPJ" />
                                    <TextField id="description" label="Descrição" />
                                    <TextField id="addressCode" label="Cep" />
                                    <TextField id="addressStreet" label="Rua" />
                                    <TextField id="addressNumber" label="Número" />
                                </div>
                                <div className="coluna">
                                    <TextField id="addressComplement" label="Complemento" />
                                    <TextField id="addressCity" label="Cidade" />
                                    <TextField id="addressState" label="Estado" />
                                    <TextField id="addressCountry" label="País" />
                                    <TextField id="password" label="Senha" />
                                    <TextField id="confirm" label="Confirmar a senha" />
                                </div>
                            </div>
                            <button type="submit" className="button-cadastro" onClick={handleSubmit}>Enviar Dados</button>
                            <Link to="" className="">
                            Voltar
            </Link>
                        </form>
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

export default Cadastrar;