import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('tudo'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
reportWebVitals();
