import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const Setting = {
  placesNumberFound: 300
};

root.render(
  <React.StrictMode>
    <App placesNumber={Setting.placesNumberFound}></App>
  </React.StrictMode>
);