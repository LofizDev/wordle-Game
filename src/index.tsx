import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WordleProvider } from './components/WordleContext';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <WordleProvider>
      <App />
    </WordleProvider>
  </React.StrictMode>
);
