import React, { useState } from 'react';
import './index.css';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// type MovieType = {
//     title: String;

// }

export const SearchInput = ({ searchTem }) => {

    return (
        <div className='search'>
            <div className='searchInput'>
                <TextField
                    fullWidth
                    margin="dense"
                    label="Buscar livro"
                    variant="filled"
                    color='primary'
                    id='searchInputfield'
                    focused
                />
            </div>
            <SearchIcon className='searchIcon' />
        </div>
    )
}