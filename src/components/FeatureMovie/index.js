import React from 'react';
import './index.css';

export default ({item}) => {
    return (
        <section className='featured' style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.info.backdrop_path})`
        }}>
            <div className='vertical'>
                <div className='horizontal'>
                    <div className='name'>
                        {item.info.name}
                    </div>
                    <div className='infos'>
                        <div className='points'>
                            {item.info.vote_average} pontos
                        </div>
                        <div className='year_lauch'>
                            {new Date(item.info.first_air_date).getFullYear()}
                        </div>
                        <div className='seasons'>
                            {item.info.number_of_seasons} temporada{item.info.number_of_seasons > 1 ? 's': ''}
                        </div>
                    </div>
                    <div className='description'>
                        {item.info.overview}
                    </div>
                    <div className='buttons'>
                        <a href={`/watch/${item.info.id}`} className='play'>► Assistir</a>
                        <a href={`/watch/${item.info.id}`} className='addToList'>+ Minha Lista</a>
                    </div>
                    <div className='genres'>
                        <strong>Genêros: </strong>
                        {item.info.genres.map((genre)=>(genre.name+", "))}
                    </div>
                </div>
            </div>
        </section>
    )
}