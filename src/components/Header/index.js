import React from 'react';
import './index.css';
import { SearchInput } from '../SearchInput';
import BookLogo from '../../assets/logo.png';
import { Button } from '@mui/material';


export default ({ activeBlack, searchTerm, handleSaveBook, setOpenModal }) => {
    function handleOpenModal() {
        setOpenModal(true)
    }

    return (
        <header className={activeBlack ? 'gray' : ''}>
            <div className='logo'>
                <a href='/'>
                    <img src={BookLogo} style={{ width: "20px" }} alt="" />
                </a>
            </div>
            <SearchInput searchTerm={searchTerm} />
            <div className='insert_book'>
                <Button
                    variant="outlined"
                    onClick={handleOpenModal}
                >
                    Inserir Livro
                </Button>
            </div>
            <div className='user'>
                <a href='/'>
                    <img src='https://occ-0-4508-1123.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABayVgGi3dnRy8BN94ufkzx0MjtGC9FogPXt-VFwcOP9T_7A6VycGIBOoQuo-djQ597ltTv_WRm4ycC6ec_nOvP8.png?r=c13' alt="" />
                </a>
            </div>
        </header>
    )
}