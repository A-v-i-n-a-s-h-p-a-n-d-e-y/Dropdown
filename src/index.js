import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// to extract component app
import App from './components/App';

// to create react dom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

