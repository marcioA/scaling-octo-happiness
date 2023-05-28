import React, { useEffect, useState } from 'react';
import './index.css';
import databaseBooks from '../../api';
import BookLogo from '../../assets/logo.png';
import Header from '../../components/Header';
import { Alert, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('init');

    const navigate = useNavigate();

    function handleLogin() {
        if (userLogin !== 'gustavo123') setLoginStatus('Usuário Incorreto');
        if (userPassword !== '123456') setLoginStatus('Senha Incorreta');

        if (userLogin === 'gustavo123' && userPassword === '123456') {
            setLoginStatus('success');
            navigate('/home')
        }
    }

    return (
        <>
            {loginStatus === 'success' &&
                <Alert severity="success">Login realizado com sucesso!</Alert>
            }
            {loginStatus === 'Usuário Incorreto' &&
                <Alert severity="error">Usuário incorreto!</Alert>
            }
            {loginStatus === 'Senha Incorreta' &&
                <Alert severity="error">Usuário incorreto!</Alert>
            }
            <div className='page'>
                <section className='login'>
                    <img src={BookLogo} alt='Logo' />
                    <TextField
                        fullWidth
                        margin="dense"
                        label="Username"
                        variant="filled"
                        color='primary'
                        id='login_username'
                        value={userLogin}
                        onChange={e => setUserLogin(e.target.value)}
                    />

                    <TextField
                        fullWidth
                        margin="dense"
                        label="Password"
                        variant="filled"
                        color='primary'
                        id='login_password'
                        value={userPassword}
                        onChange={e => setUserPassword(e.target.value)}
                    />

                    <Button onClick={handleLogin} >Logar</Button>
                </section>
            </div>
        </>
    )
}