import React from 'react';
import './SubscriptionSection.css';
import DashedBackground from '../dashedBackground/DashedBackground';

const SubscriptionSection = () => {
  return (
    <div className='subscription-section'>
      <div className='sub-msg'>
        <strong className='msg-heading'>Subscribe to our Newsletter</strong> <br />
        <small className='msg-content'>Be the first to know about new products, sales and promotions.</small>
      </div>
      <div className='sub-form'>
        <form>
          <input className='submit-email' type={"email"} placeholder={"Your email"}></input>
          <button className='submit-btn' type={'submit'}><DashedBackground text="Subscribe" color="#f78da7" /></button>
        </form>
      </div>
    </div>
  )
}

export default SubscriptionSection;