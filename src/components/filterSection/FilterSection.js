import React from 'react';
import './FilterSection.css';

const FilterSection = () => {
  return (
    <div className='filter-section'>
        <div className='filter-head'>
            <div className='price-filter'>
                <p className='price-heading'>Price range: $0 - $150</p>
                <input type="range" min="0" max="100"></input>
            </div>
            <div className='order-sorting'>
              <b>SORT BY:</b> Sort by latest
              <b>SHOW:</b> 12
            </div>
            <div className='filter-btn'></div>
        </div>

        <div className='filter-content'>
            <div className='brands'>
                <h3>Brands</h3>
                <div className='brands-list'>
                    <a className='brand-btn'>Band Boys</a>
                    <a className='brand-btn'>BoBux</a>
                    <a className='brand-btn'>Next</a>
                    <a className='brand-btn'>Outfitters</a>
                    <a className='brand-btn'>RadiCOOL</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FilterSection;