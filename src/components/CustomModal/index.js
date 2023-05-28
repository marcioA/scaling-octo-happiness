import React, { useState } from 'react';
import databaseBooks from '../../api';
import { Alert, Box, Button, Modal, TextField, Typography } from '@mui/material';

export function CustomModal({ openModal, setOpenModal }) {
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookCategory, setBookCategory] = useState('');
    const [bookPublication, setBookPublication] = useState('');
    const [bookPages, setBookPages] = useState(1);
    const [bookImage, setBookImage] = useState('');
    const [bookStatus, setBookStatus] = useState({ status: null });

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
        setOpenModal(false);
    }

    async function handleSaveBook() {
        const dataBooks = {
            title: bookTitle,
            author: bookAuthor,
            category: bookCategory,
            publication: bookPublication,
            pages: bookPages,
            image: bookImage
        }
        const booksStatus = await databaseBooks.postBook(dataBooks);
        setBookStatus(booksStatus);
    }
    return (
        <React.Fragment>
            {bookStatus.status === 'success' &&
                <Alert severity="success">Livro Cadastrado com sucesso!</Alert>
            }
            {bookStatus.status === 'error' &&
                <Alert severity="error">Ocorreu um erro, tente novamente.</Alert>
            }
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
                            value={bookTitle}
                            onChange={e => setBookTitle(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            label="Autor"
                            variant="filled"
                            color='primary'
                            id='searchInputfield'
                            style={{ margin: 10 }}
                            value={bookAuthor}
                            onChange={e => setBookAuthor(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            label="Categoria"
                            variant="filled"
                            color='primary'
                            id='searchInputfield'
                            style={{ margin: 10 }}
                            value={bookCategory}
                            onChange={e => setBookCategory(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            label="Publicação"
                            variant="filled"
                            color='primary'
                            id='searchInputfield'
                            style={{ margin: 10 }}
                            value={bookPublication}
                            onChange={e => setBookPublication(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            label="Quantidade de páginas"
                            variant="filled"
                            color='primary'
                            id='searchInputfield'
                            style={{ margin: 10 }}
                            value={bookPages}
                            onChange={e => setBookPages(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            label="Url da imagem"
                            variant="filled"
                            color='primary'
                            id='searchInputfield'
                            style={{ margin: 10 }}
                            value={bookImage}
                            onChange={e => setBookImage(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ widt: '100%' }}>
                        <Button onClick={handleSaveBook}>
                            Salvar
                        </Button>
                        <Button onClick={handleClose}>
                            Cancelar
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </React.Fragment>
    )
}