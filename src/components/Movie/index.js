import React, { useState } from 'react';
import './index.css';
import ArrowBack from '../../assets/arrow-left.svg';
import ArrowForward from '../../assets/arrow-right.svg';

// type MovieType = {
//     title: String;

// }

export default ({title, items}) => {
    const listSize = items.results.length*150;

    const [scrollX, setScrollX] = useState(0);
    const [notShowLeft, setNotShowLeft] = useState(0);
    const [notShowRight, setNotShowRight] = useState(null);

    const handleLeftArrow = () => {
        const limit = scrollX + Math.round(window.innerWidth/2);
        if (limit > 0){
            setNotShowLeft(0)
            return setScrollX(0);
        }
        setNotShowRight(1);
        return setScrollX(limit);
    }

    const handleRightArrow = () => {
        const limit = scrollX - Math.round(window.innerWidth/2);
        setNotShowLeft(1)
        if ((window.innerWidth - listSize) > limit){
            setNotShowRight(0);
            return setScrollX((window.innerWidth-listSize)-60);
        }
        return setScrollX(limit);
    }

    return (
        <div className='list-main'>
            <div className='moveLeft' onClick={handleLeftArrow} style={{
                opacity: notShowLeft
            }}>
                <img src={ArrowBack} style={{fontSize: 50}} />
            </div>
            <div className='moveRight' style={{
                opacity: notShowRight
            }}>
                <img src={ArrowForward} style={{fontSize: 50}} onClick={handleRightArrow} />
            </div>

            <h2>{title}</h2>
            <div className='listarea'>
                <div className='list' style={{
                    marginLeft: scrollX,
                    width: listSize
                }}>
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