import React, { useState } from 'react';
import databaseBooks from '../../api';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';

export function CustomModal({ openModal }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    function handleClose() {
        console.log('')
    }
    return (
        // title, author, category, publication, pages, image
        <React.Fragment>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" color={'black'}>
                        Inserir Novo Livro
                    </Typography>
                    <Box>
                        <TextField
                            margin="normal"
                            label="Título"
                            variant="filled"
                            color='primary'
                            id='book_name'
                            style={{ margin: 10 }}
                        // value={typeString}
                        // onChange={e => setTypeString(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            label="Autor"
                            variant="filled"
                            color='primary'
                            id='searchInputfield'
                            style={{ margin: 10 }}
                        // value={typeString}
                        // onChange={e => setTypeString(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            label="Categoria"
                            variant="filled"
                            color='primary'
                            id='searchInputfield'
                            style={{ margin: 10 }}
                        // value={typeString}
                        // onChange={e => setTypeString(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            label="Publicação"
                            variant="filled"
                            color='primary'
                            id='searchInputfield'
                            style={{ margin: 10 }}
                        // value={typeString}
                        // onChange={e => setTypeString(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            label="Quantidade de páginas"
                            variant="filled"
                            color='primary'
                            id='searchInputfield'
                            style={{ margin: 10 }}
                        // value={typeString}
                        // onChange={e => setTypeString(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            label="Url da imagem"
                            variant="filled"
                            color='primary'
                            id='searchInputfield'
                            style={{ margin: 10 }}
                        // value={typeString}
                        // onChange={e => setTypeString(e.target.value)}
                        />
                    </Box>
                    <Box>
                        <Button >
                            Salvar
                        </Button>
                        <Button >
                            Cancelar
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </React.Fragment>
    )
}