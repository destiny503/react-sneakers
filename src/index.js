import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';

import './index.scss';
import 'macro-css'

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* basename чтобы гитхаб пейджес работал */}
    <BrowserRouter basename="/react-sneakers">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);