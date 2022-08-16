/* eslint-disable max-len */
import './SpinnerLogo.css';

import React from 'react';

export const SpinnerLogo: React.FC = () => (
  <svg id='spinner' xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 38 38'>
    <defs>
      <linearGradient id='trail' x1='0%' x2='100%' y1='0%' y2='0%'>
        <stop offset='0%' stopColor='#007fff' stopOpacity='0.00' />
        <stop offset='50%' stopColor='#007fff' stopOpacity='0.50' />
        <stop offset='100%' stopColor='#007fff' stopOpacity='1.00' />
      </linearGradient>
    </defs>
    <g fill='none' fillRule='evenodd'>
      <g transform='translate(1 1)'>
        <path id='trail-path' stroke='url(#trail)' strokeWidth='2' d='M36 18c0-9.94-8.06-18-18-18'>
          <animateTransform
            attributeName='transform'
            dur='0.9s'
            from='0 18 18'
            repeatCount='indefinite'
            to='360 18 18'
            type='rotate'
          />
        </path>
        <circle cx='36' cy='18' r='1' fill='#007fff'>
          <animateTransform
            attributeName='transform'
            dur='0.9s'
            from='0 18 18'
            repeatCount='indefinite'
            to='360 18 18'
            type='rotate'
          />
        </circle>
      </g>
    </g>
  </svg>
);
