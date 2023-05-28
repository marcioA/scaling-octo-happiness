import React, { useEffect, useState } from 'react';
import './index.css';
import databaseBooks from '../../api';
import Book from '../../components/Book';
import Header from '../../components/Header';
import { CustomModal } from '../../components/CustomModal';

export function Home() {
    const [bookList, setBookList] = useState([]);
    const [typedText, setTypedText] = useState('');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            const list = await databaseBooks.getHomeList();
            setBookList(list);
        }
        loadAll();

    }, []);

    return (
        <div className='page'>
            <Header activeBlack={true} searchTerm={setTypedText} setOpenModal={setOpen} />

            <section className='lists'>
                {bookList.map((item, key) => (
                    <div key={key}>
                        <Book title={item.title} items={item.items} typedTextSearch={typedText} />
                    </div>
                ))}
            </section>
            <CustomModal
                openModal={open}
            />
        </div>
    )
}