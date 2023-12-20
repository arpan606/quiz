import React from 'react';
import './loader.scss';

const Loader = () => {
  return (
    <div className='loader'>
        <div className='spinner'>
            <div className="spinner1">
            </div>
        </div>
        <span className='loading-text'>LOADING...</span>
    </div>
  )
}

export default Loader