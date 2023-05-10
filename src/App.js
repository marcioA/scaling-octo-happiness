import React, { useEffect, useState } from 'react';
import './App.css';
import databaseBooks from './api';
import Book from './components/Book';
import Header from './components/Header';

export default () => {
  const [bookList, setBookList] = useState([]);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const loadAll = async () => {
      const list = await databaseBooks.getHomeList();
      setBookList(list);
    }
    loadAll();

  }, []);

  return (
    <div className='page'>
      <Header activeBlack={true} searchTerm={setTypedText} />

      <section className='lists'>
        {bookList.map((item, key) => (
          <div key={key}>
            <Book title={item.title} items={item.items} typedTextSearch={typedText} />
          </div>
        ))}
      </section>
    </div>
  )
}