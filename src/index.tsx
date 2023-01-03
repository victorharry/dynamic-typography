import React from 'react';
import ReactDOM from 'react-dom/client';
import Typography from './Components/Typography';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Typography tag="h1" color="Highlight" fontFamily="sans-serif">
      Hello World!
    </Typography>
  </React.StrictMode>
);