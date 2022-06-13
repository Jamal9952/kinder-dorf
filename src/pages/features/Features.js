import React from 'react';
import './Features.css';
import SpecialFont from '../../components/specialFont/SpecialFont';
import Header from '../../components/header/Header';

const Features = () => {
  return (
    <div className='page'>
        <Header />
        <div className='not-avail'> 
        <SpecialFont title="Features Page" desc="Not Available Right Now" descSecLine="Coming Soon"/>
        </div>
    </div>
  )
}

export default Features;