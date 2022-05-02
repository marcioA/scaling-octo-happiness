import React, {useEffect, useState} from 'react';
import './App.css';
import databaseMovies from './api';
import Movie from './components/Movie';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featureMovie, setFeatureMovie] = useState(null);
  const [activeBlack, setActiveBlack] = useState(false);
  
  useEffect(()=>{
    const loadAll = async ()=>{
      const list = await databaseMovies.getHomeList();
      setMovieList(list);
      
      const originals = list.filter(e => e.slug === 'originals');
      const randomNumber = Math.round(Math.random()*(originals[0].items.results.length-1));
      const selectedMovie = originals[0].items.results[randomNumber];

      const movieDetail = await databaseMovies.getMovieInfo(selectedMovie.id, 'tv');
      
      setFeatureMovie(movieDetail);
    }
    loadAll();

  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 350){
        setActiveBlack(true);
      }else {
        setActiveBlack(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])


  return (
    <div className='page'>
      {/* 
        Header
        Destaque
        As listas
        Rodapé
      */}

      <Header activeBlack={activeBlack} />

      {featureMovie && 
        <FeatureMovie item={featureMovie} />
      }


      <section className='lists'>
        {movieList.map((item, key)=>(
          <div>
            <Movie key={key} title={item.title} items={item.items} />
          </div>
        ))}
      </section>
    </div>
  )
}