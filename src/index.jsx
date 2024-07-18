import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './user-context/UserContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
);
