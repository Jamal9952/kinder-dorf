import React from 'react';
import './Sidebar.css';
import DashedBackground from '../dashedBackground/DashedBackground';
import ProductCard from '../productCard/ProductCard';
import { productCardData } from '../../Utils/Services';

const Sidebar = ( props) => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-head'>
      <DashedBackground className="sidebar-headings" text="Products Categories" />
      </div>
      <div className='product-categories'>
        <ul className='product-parents'>
          <li className='parent-list'>
            <a>Boys Clothing</a>
            <span className='count'>7</span>
            <ul className='product-children'>
              <li className='child-list'><a>Jeans</a><span className='count'>4</span></li>
              <li className='child-list'><a>Rompers & Jumpsuits</a><span className='count'>6</span></li>
              <li className='child-list'><a>Sweaters</a><span className='count'>2</span></li>
              <li className='child-list'><a>Tops & Shirts</a><span className='count'>9</span></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className='products-on-sale'>
      <DashedBackground className="sidebar-headings" text="Products on Sale" />
      <div className='side-prod-cont'>
      {productCardData.map(productCard => <ProductCard className="sidebar-card" img={productCard.img} title={productCard.title} price={productCard.price} ></ProductCard>)}
      </div>
      </div>
      <div className='featured-products'>
      <DashedBackground className="sidebar-headings" text="Featured Products"/>
      <div className='side-prod-cont'>
      {productCardData.map(productCard => <ProductCard className="sidebar-card" img={productCard.img} title={productCard.title} price={productCard.price}/>)}
      </div>
      </div>
    </div>
  )
}
export default Sidebar;