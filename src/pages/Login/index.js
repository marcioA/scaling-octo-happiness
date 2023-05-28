import React, { useEffect, useState } from 'react';
import './index.css';
import databaseBooks from '../../api';

import Header from '../../components/Header';
import { TextField } from '@mui/material';

export function Login() {

    return (
        <div className='page'>
            {/* <Header activeBlack={true} searchTerm={setTypedText} /> */}

            <section className='login'>
                <TextField
                    fullWidth
                    margin="dense"
                    label="Username"
                    variant="filled"
                    color='primary'
                    id='login_username'
                    // value={typeString}
                    // onChange={e => setTypeString(e.target.value)}
                    focused
                />

                <TextField
                    fullWidth
                    margin="dense"
                    label="Password"
                    variant="filled"
                    color='primary'
                    id='login_password'
                // value={typeString}
                // onChange={e => setTypeString(e.target.value)}
                />
            </section>
        </div>
    )
}