import React from 'react';
import './index.css';


export default ({activeBlack}) => {
    return (
        <header className={activeBlack? 'black' : ''}>
            <div className='logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png' />
                </a>
            </div>
            <div className='user'>
                <a href='/'>
                    <img src='https://occ-0-4508-1123.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABayVgGi3dnRy8BN94ufkzx0MjtGC9FogPXt-VFwcOP9T_7A6VycGIBOoQuo-djQ597ltTv_WRm4ycC6ec_nOvP8.png?r=c13' />
                </a>
            </div>
        </header>
    )
}