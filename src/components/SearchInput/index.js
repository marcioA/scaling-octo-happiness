import React, { useEffect, useState } from 'react';
import './index.css';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchInput = ({ searchTerm }) => {
    const [typeString, setTypeString] = useState('');

    useEffect(() => {
        searchTerm(typeString);
    }, [typeString])

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
                    value={typeString}
                    onChange={e => setTypeString(e.target.value)}
                    focused
                />
            </div>
            <SearchIcon className='searchIcon' />
        </div>
    )
}