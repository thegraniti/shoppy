import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from './contexts/ContextProvider';
import './index.css';
import App from './App';

import './syncfusion-licenses'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ContextProvider>
    <App />
  </ContextProvider>
  </BrowserRouter>
);
