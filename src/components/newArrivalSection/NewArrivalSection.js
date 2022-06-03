import React from 'react';
import './NewArrivalSection.css';
import SpecialFont from '../specialFont/SpecialFont';
import ProductCard from '../productCard/ProductCard';
import { newArrivalCard } from '../../Utils/Services';

const NewArrivalSection = () => {
  return (
    <div className='new-arrival-section'>
      <SpecialFont
        title="New Arrivals"
        desc="We’ve picked few pieces we’re pretty sure you’ll love."
        descSecLine="Check back often and enjoy."
      />
      <div className="brand-product-container">
        {newArrivalCard.map(productCard => <ProductCard img={productCard.img} title={productCard.title} price={productCard.price} width="25%"/>)}
      </div>
    </div>
  )
}

export default NewArrivalSection;