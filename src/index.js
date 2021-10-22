import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import App from './App';

// const _JSXStyle = require('styled-jsx/style').default;
// if (typeof global !== 'undefined') {
//     Object.assign(global, { _JSXStyle });
// }

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);


