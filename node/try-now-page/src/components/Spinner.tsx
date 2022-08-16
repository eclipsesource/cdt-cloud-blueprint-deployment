import './Spinner.css';

import React from 'react';

import { SpinnerLogo } from './SpinnerLogo';

export const Spinner: React.FC = () => (
  <div className='spinner-container'>
    <div className='custom-spinner'>
      <SpinnerLogo />
    </div>
  </div>
);
