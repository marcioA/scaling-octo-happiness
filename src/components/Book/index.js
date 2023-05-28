import { useEffect, useState } from 'react';
import './index.css';

export default ({ title, items, typedTextSearch }) => {
    const [listItems, setListItems] = useState([]);
    const [showDetail, setShowDetail] = useState('none');

    useEffect(() => {
        if (!typedTextSearch) return setListItems(items);
        setListItems(listItems.filter(item => item.title.includes(typedTextSearch)));
    }, [typedTextSearch])
    return (
        <div className='list-main'>
            <h2>{title}</h2>
            <div className='listarea'>
                <div className='list' >
                    {listItems?.length > 0 && listItems.map((item, key) => (
                        <div className='item' key={key} onMouseOver={() => setShowDetail('inherit')} onMouseLeave={() => setShowDetail('none')}>
                            <img src={item.image} alt={item.title} key={key} />
                            <div id={item._id} >
                                <h6>{item.title}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}