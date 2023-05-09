import React, { useEffect, useState } from 'react';
import './App.css';
import databaseMovies from './api';
import Book from './components/Movie';
import Header from './components/Header';

export default () => {
  const [bookList, setBookList] = useState([]);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const loadAll = async () => {
      const list = await databaseMovies.getHomeList();
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
            <Book title={item.title} items={item.items.items} typedTextSearch={typedText} />
          </div>
        ))}
      </section>
    </div>
  )
}