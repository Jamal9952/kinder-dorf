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
                <h3 className='filter-list-heading'>BRANDS</h3>
                <div className='brands-list'>
                    <a className='brand-btn'>Band Boys</a>
                    <a className='brand-btn'>BoBux</a>
                    <a className='brand-btn'>Next</a>
                    <a className='brand-btn'>Outfitters</a>
                    <a className='brand-btn'>RadiCOOL</a>
                </div>
            </div>

            <div className='ages'>
                <h3 className='filter-list-heading'>AGE</h3>
                <div className='age-list'>
                    <a className='age-btn'>0 - 12 months</a>
                    <a className='age-btn'>1 - 4 years</a>
                    <a className='age-btn'>4 - 8 years</a>
                    <a className='age-btn'>8 - 14 years</a>
                </div>
            </div>

            <div className='colors'>
                <h3 className='filter-list-heading'>COLOR</h3> 
                <div className='color-btn'></div>
                <div className='color-btn' style={{backgroundColor : "pink"}}></div>
                <div className='color-btn' style={{backgroundColor : "blue"}}></div>
                <div className='color-btn' style={{backgroundColor : "yellow"}}></div>
                <div className='color-btn' style={{backgroundColor : "orange"}}></div>
                <div className='color-btn' style={{backgroundColor : "skyblue"}}></div>
            </div>

            <div className='sizes'>
                <h3 className='filter-list-heading'>SIZE</h3>
                <div className='size-btn'>S</div>
                <div className='size-btn'>M</div>
                <div className='size-btn'>X</div>
                <div className='size-btn'>XL</div>
            </div>
        </div>
    </div>
  );
}

export default FilterSection;