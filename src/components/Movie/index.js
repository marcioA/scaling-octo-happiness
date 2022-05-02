import React from 'react';
import './index.css';
import ArrowBack from '../../assets/arrow-left.svg';
import ArrowForward from '../../assets/arrow-right.svg';

// type MovieType = {
//     title: String;

// }

export default ({title, items}) => {

    return (
        <div className='list-main'>
            <div className='moveLeft'>
                <ArrowBack />
            </div>
            <div className='moveRight'>
                <img src={ArrowForward} />
            </div>

            <h2>{title}</h2>
            <div className='listarea'>
                <div className='list'>
                    {items?.results.length > 0 && items.results.map((item, key)=>( 
                        <div className='item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}