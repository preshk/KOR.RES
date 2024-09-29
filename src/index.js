import React from 'react';
import ReactDOM from 'react-dom/client';

// To install react router and bootstrap libraries
// npm i react-router-dom bootstrap react-bootstrap
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <Router>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </Router>
);
