import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WordleProvider } from './context/WordleContext';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <WordleProvider>
    <App />
  </WordleProvider>
);
