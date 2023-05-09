import { useEffect, useState } from 'react';
import './index.css';

// type MovieType = {
//     title: String;

// }

export default ({ title, items, typedTextSearch }) => {
    const [listItems, setListItems] = useState([]);
    useEffect(() => {
        if (!typedTextSearch) return setListItems(items);
        setListItems(listItems.filter(item => item.volumeInfo.title.includes(typedTextSearch)));
    }, [typedTextSearch])
    return (
        <div className='list-main'>
            <h2>{title}</h2>
            <div className='listarea'>
                <div className='list' >
                    {listItems?.length > 0 && listItems.map((item, key) => (
                        <div className='item' key={key}>
                            <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}