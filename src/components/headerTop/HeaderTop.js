import React from 'react';
import './HeaderTop.css'

const HeaderTop = () => {
  return (
    <div className='header-top'>
        <div className='shortcuts'>
            <ul>
                <li><a>Girls Clothing</a></li>
                <li><a>Boys Clothing</a></li>
                <li><a>Toys & Accessories</a></li>
            </ul>
        </div>
        <div className='customer-care'></div>
    </div>
  )
}

export default HeaderTop;