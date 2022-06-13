import React from 'react';
import './LookBook.css';
import SpecialFont from '../../components/specialFont/SpecialFont';
import Header from '../../components/header/Header';

const LookBook = () => {
  return (
    <div className='page'>
        <Header />
        <div className='not-avail'>
        <SpecialFont title="LookBook Page 📖" desc="Not Available Right Now" descSecLine="Coming Soon"/>
        </div>
    </div>
  )
}

export default LookBook;