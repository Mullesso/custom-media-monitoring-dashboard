import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import Bootstrap and custom styles.  Bootstrap styles provide the grid
// system and components used throughout the application.  The custom
// stylesheet can override Bootstrap defaults or add additional styling.
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Mount the root component into the DOM.  Using React 18's createRoot
// API ensures concurrent rendering and other modern features are enabled.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);