import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/styles.scss'
import { App } from './root-cmp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
