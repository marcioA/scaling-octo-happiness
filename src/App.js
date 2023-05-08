import React, { useEffect, useState } from 'react';
import './App.css';
import databaseMovies from './api';
import Book from './components/Movie';
import Header from './components/Header';

export default () => {

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await databaseMovies.getHomeList();
      setBookList(list);
    }
    loadAll();

  }, []);

  useEffect(() => {
    console.log(bookList)
  }, [bookList])

  return (
    <div className='page'>
      <Header activeBlack={true} />

      <section className='lists'>
        {bookList.map((item, key) => (
          <div>
            <Book key={key} title={item.title} items={item.items} />
          </div>
        ))}
      </section>
    </div>
  )
}