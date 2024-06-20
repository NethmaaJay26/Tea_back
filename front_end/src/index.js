import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/Shopcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ShopContextProvider>
  
    <App />
 
 </ShopContextProvider>
);
